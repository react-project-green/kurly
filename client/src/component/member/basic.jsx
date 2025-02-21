const [allCheck, setAllCheck] = useState(false);
const [useCheck, setUseCheck] = useState(false);
const [persnalCheck, setPersonalCheck] = useState(false);
const [persnalMktCheck, setPersonalMktCheck] = useState(false);
const [marketingCheck, setMarketingCheck] = useState(false);
const [ageCheck, setAgeCheck] = useState(false);

const allBtnEvent =()=>{
  if(allCheck === false) {
    setAllCheck(true);
    setUseCheck(true);
    setPersonalCheck(true);
    setPersonalMktCheck(true);
    setMarketingCheck(true);
    setAgeCheck(true);
  }else {
    setAllCheck(false);
    setUseCheck(false);
    setPersonalCheck(true);
    setPersonalMktCheck(true);
    setMarketingCheck(false);
    setAgeCheck(false);
  } 
};