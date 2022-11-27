import { Trash } from 'phosphor-react';
import Expresso from '../../../public/assets/coffee/expresso.png';
import { Controls } from '../Controls/index';
import { SelectedProductContainer } from './style';



export function SelectedProduct() {
  return (
    <SelectedProductContainer>
      <div className='product__wrapper'>
        <img src={Expresso} alt="" />
        <div className="controls__wrapper">
          <h3>Expresso Tradicional</h3>
          <div className="buttons__wrapper">
            <Controls />

            <div className="controls">
              <button>
                <Trash size={16} className="trash-icon" />
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