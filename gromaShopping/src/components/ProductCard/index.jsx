import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import {Img} from '../imgs/index';
import { Button } from '../Buttons/index';
import './style.scss';
import { useState} from 'react';
import { callToApi } from '../../services/api'


export const ProductCard = () => {
  const [starWarsData] = useState({});
  const [product, setProduct] = useState([])  // , setStarWarsData;

  // useEffect(() => {
  //   callToApi().then( (response) => {
  //     setStarWarsData(response);
  //   })
  // }, []);

  return(
    <>
      <div className='productCard'>
        <Img alt={'Product img'} className={'img-productCard'}/>
        <h1>{ starWarsData.name }</h1>
        <p>{starWarsData.eye_color}</p>
        <p>{starWarsData.homeworld}</p>
        <p>price{starWarsData.mass} €</p>
        <div className='productCard-button-container'>
          <Button className={'productCard-button'} type={'button'} value={'Add to list'}/>
          <PlaylistAddCheckRoundedIcon />
        </div> 
      </div>
    </>
  )
}
