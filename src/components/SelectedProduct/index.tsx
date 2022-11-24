import { Minus, Plus, Trash } from 'phosphor-react';
import Expresso from '../../../public/assets/coffee/expresso.png';
import { SelectedProductContainer } from './style';



export function SelectedProduct() {
  return (
    <SelectedProductContainer>
      <div className='product__wrapper'>
        <img src={Expresso} alt="" />
        <div>
          <h3>Expresso Tradicional</h3>
          <div className="controls__wrapper">
            <div className="controls">
              <button>
                <Minus size={14} weight="fill" />
              </button>

              <span>
                1
              </span>

              <button>
                <Plus size={14} weight="fill" />
              </button>
            </div>

            <div className="controls">
              <button>
                <Trash size={14} className="trash-icon" />
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>

      <span className='price'>R$ 19,80</span>

    </SelectedProductContainer >

  )
}