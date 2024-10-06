import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from './CartSlice';


function Cart() {

  const products= useSelector(state=>state.cart)

  const dispatch= useDispatch()

  const removeCart=(id)=>{
    dispatch(remove(id))
  }

  return (
    <>
    <div className='row'>
        {
            products.map((product)=>{
                return(
                    
                    <div className='col-md-12'  >
                        <Card className='h-100' key={product.id}>
                            <div className='text-center'>
                                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
                                <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Title>
                                    {product.price}
                                </Card.Title>
                                
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={()=>removeCart(product.id)}>Remove</Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div> 
                    
                )
                
            })
        }

   </div>
    </>
                       
  )
}

export default Cart