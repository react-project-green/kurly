import React,{useState, useEffect} from 'react';

export default function Nav({scrolls}) {
    const [activeEle, setActiveEle] = useState(scrolls[0].id);

    // tab nav click event
    const tabActive = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    useEffect(() =>{
        const handleScroll = () => {
            const currentScrollPos = window.scrollY; // 수직으로 스크롤 된 값
            const currentSection = scrolls.find(({ ref }) => {
                if(ref.current){
                        const offsetTop = ref.current.offsetTop;
                        const offsetBottom = offsetTop + ref.current.offsetHeight + 680;
                        return currentScrollPos >= offsetTop && currentScrollPos < offsetBottom;
                    }
                return false;
            });
            if(currentSection) setActiveEle(currentSection.id);          
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[scrolls]);

    return (
        <ul>
            {
                scrolls.map((el,i) =>
                    <li ref={el.ref}  onClick={()=>tabActive(el.ref)} className={(activeEle === el.id) ? 'on':''} key={i}>
                        { (el.id === '후기') ? `${el.id}(1,2300)` : el.id }
                    </li>
                )
            }
        </ul>
    );
}

