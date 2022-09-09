// import products from '../data/Data.json';
import {Img} from '../imgs/index';
import { Button } from '../Buttons/index';
import './style.scss';


export const ProductCard = (data) => {
  return(
    <>
        <div className='productCard'>
            <Img alt={'Product img'} className={'img-productCard'}/>
            <h1>{'product name'}</h1>
            <p>{'per product'}</p>
            <p>{'product brand'}</p>
            <p>{'price: 0,00 €'}</p>
            <Button className={'productCard-button'} type={'button'} value={'Add to list'} /> 
        </div>
    </>
  )
}
