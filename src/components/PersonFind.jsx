import React from 'react';

import { Category } from './';

const PersonFind = ({ categoryId }) => {
  return (
    <section className="personFind">
      <Category />

      <div className="personFind__form">
        <form>
          <div className="personFind__formHeader">
            <h4>Поиск по физ лицам</h4>
          </div>

          <div className="personFind__filter filter">
            <label>
              <div className='filter__header'>
                ФИО физ лица по ИП
              </div>
              <input type="text" placeholder='ФИО...' />
            </label>

            <label>
              <div className='filter__header'>
                Номер ИП
              </div>
              <input type="text" placeholder='Номер ИП...' />
            </label>

            <label>
              <div className='filter__header'>
                ИНН должника
              </div>
              <input type="text" placeholder='ИНН должника...' />
            </label>

            <label>
              <div className='filter__header'>
                Дата рождения физ.лица по ИП
              </div>
              <input type="text" placeholder='Дата рожения...' />
            </label>

            <label>
              <div className='filter__header'>
                Номер ИД
              </div>
              <input type="text" placeholder='Номер ИД...' />
            </label>

            <label>
              <div className='filter__header'>
                ID должника по долгу с ИП в ПО Контакт
              </div>
              <input type="text" placeholder='ID должника...' />
            </label>
          </div>

          <div className="personFind__sendBtn">
            <button className='personFind__btn'>Поиск</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PersonFind;
