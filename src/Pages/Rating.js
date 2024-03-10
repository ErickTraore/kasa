import myStarc from '../assets/icons/vectorStarc.png';
import myStarn from '../assets/icons/vectorStarn.png';

const Rating = (props) => {
    
    // const divStarc = <img src={myStarc} alt="" />
    // const divStarn = <img src={myStarn} alt="" />
    const myRate = props.rating;
    const theRate = 5;
          console.log(myRate);
        const listRates = [];
        for (let i = 0; i < myRate; i++) {
        listRates.push(<img src={myStarc} key = {i} />) ;
        }
        for (let i = 0; i < (theRate - myRate); i++) {
            listRates.push( <img src={myStarn} key = {i} />
            ) ;
            }
    return (
        <div className='rating'>
            {listRates.map((item, index) => (
                <li className='rating__item' key = {index} >{item}</li>  
            ))}
        </div>
    )
}
    export default Rating;
