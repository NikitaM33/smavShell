import React from 'react';

const FindResults = () => {
  return (
    <section className="findResults">
      <div className="findResults__formHeader">
        <h4>Результат поиска</h4>
      </div>

      <div className="findResults__downloadBtn">
        <button type="download" className="">
          <svg width="26" height="35" viewBox="0 0 26 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.125 9.28125V0.25H1.84375C0.914062 0.25 0.25 0.980469 0.25 1.84375V32.6562C0.25 33.5859 0.914062 34.25 1.84375 34.25H24.1562C25.0195 34.25 25.75 33.5859 25.75 32.6562V10.875H16.7188C15.7891 10.875 15.125 10.2109 15.125 9.28125ZM20.1719 23.3594L13.7969 29.7344C13.332 30.1328 12.6016 30.1328 12.1367 29.7344L5.76172 23.3594C5.09766 22.6953 5.5625 21.5 6.49219 21.5H10.875V16.1875C10.875 15.6562 11.3398 15.125 11.9375 15.125H14.0625C14.5938 15.125 15.125 15.6562 15.125 16.1875V21.5H19.4414C20.3711 21.5 20.8359 22.6953 20.1719 23.3594ZM25.2852 7.22266L18.7773 0.714844C18.4453 0.449219 18.0469 0.25 17.6484 0.25H17.25V8.75H25.75V8.35156C25.75 7.95312 25.5508 7.55469 25.2852 7.22266Z" fill="#08415C" />
          </svg>

          Выгрузить в Excel
        </button>
      </div>

      <div className="findResults__results results">
        <table>
          <thead className="results__tableHeader">
            <tr>
              <th className="results__th">
                №
              </th>

              <th className="results__th">
                ФИО должника
              </th>
              <th className="results__th">
                Исполнительное  производство
              </th>
              <th className="results__th">
                Реквизиты испол. документа
              </th>
              <th className="results__th">
                Дата, причина окончания ИП
              </th>
              <th className="results__th">
                Предмет исполнения, сумма непогашенной задолженности
              </th>
              <th className="results__th">
                Отдел судебных приставов
              </th>
              <th className="results__th">
                Судебный пристав-исполнитель, телефон для получения информации
              </th>
              <th className="results__th">
                Последняя актуальная дата в ИП СМЭВ
              </th>
              <th className="results__th">
                ID должника в ПО Контакт
              </th>
            </tr>
          </thead>

          <tbody className="results__tbody">
            <tr>
              <th className="results__tb boldFont">1</th>
              <th className="results__tb">
                Иванов Иван Иванович 30.05.1989г Калининградская обл. Озерский р-н. г. Озерск
              </th>
              <th className="results__tb">
                19905/22/39013-ИП от 19.07.2022
              </th>
              <th className="results__tb">
                Судебный приказ от 10.05.2016 №2-2206/16 судебный участок № 408 красносельского района 7841430420
              </th>
              <th className="results__tb"></th>
              <th className="results__tb">
                Задолженность по кредитным платежам (кроме ипотеки): 250895.84 руб.
              </th>
              <th className="results__tb">
                ОСП Озерского района 238120, Россия, Калининградская обл, Озерский р-н, г. Озерск, ул. Советская, д. 4А
              </th>
              <th className="results__tb">
                Кайбулаева Л. У. +74012924900
              </th>
              <th className="results__tb">
                28.08.2022
              </th>
              <th className="results__tb">
                1443643
              </th>
            </tr>

            <tr>
              <th className="results__tb boldFont">2</th>
              <th className="results__tb">
                Иванов Иван Иванович 30.05.1989г Калининградская обл. Озерский р-н. г. Озерск
              </th>
              <th className="results__tb">
                19905/22/39013-ИП от 19.07.2022
              </th>
              <th className="results__tb">
                Судебный приказ от 10.05.2016 №2-2206/16 судебный участок № 408 красносельского района 7841430420
              </th>
              <th className="results__tb"></th>
              <th className="results__tb">
                Задолженность по кредитным платежам (кроме ипотеки): 250895.84 руб.
              </th>
              <th className="results__tb">
                ОСП Озерского района 238120, Россия, Калининградская обл, Озерский р-н, г. Озерск, ул. Советская, д. 4А
              </th>
              <th className="results__tb">
                Кайбулаева Л. У. +74012924900
              </th>
              <th className="results__tb">
                28.08.2022
              </th>
              <th className="results__tb">
                1443643
              </th>
            </tr>

            <tr>
              <th className="results__tb boldFont">3</th>
              <th className="results__tb">
                Иванов Иван Иванович 30.05.1989г Калининградская обл. Озерский р-н. г. Озерск
              </th>
              <th className="results__tb">
                19905/22/39013-ИП от 19.07.2022
              </th>
              <th className="results__tb">
                Судебный приказ от 10.05.2016 №2-2206/16 судебный участок № 408 красносельского района 7841430420
              </th>
              <th className="results__tb"></th>
              <th className="results__tb">
                Задолженность по кредитным платежам (кроме ипотеки): 250895.84 руб.
              </th>
              <th className="results__tb">
                ОСП Озерского района 238120, Россия, Калининградская обл, Озерский р-н, г. Озерск, ул. Советская, д. 4А
              </th>
              <th className="results__tb">
                Кайбулаева Л. У. +74012924900
              </th>
              <th className="results__tb">
                28.08.2022
              </th>
              <th className="results__tb">
                1443643
              </th>
            </tr>

            <tr>
              <th className="results__tb boldFont">4</th>
              <th className="results__tb">
                Иванов Иван Иванович 30.05.1989г Калининградская обл. Озерский р-н. г. Озерск
              </th>
              <th className="results__tb">
                19905/22/39013-ИП от 19.07.2022
              </th>
              <th className="results__tb">
                Судебный приказ от 10.05.2016 №2-2206/16 судебный участок № 408 красносельского района 7841430420
              </th>
              <th className="results__tb"></th>
              <th className="results__tb">
                Задолженность по кредитным платежам (кроме ипотеки): 250895.84 руб.
              </th>
              <th className="results__tb">
                ОСП Озерского района 238120, Россия, Калининградская обл, Озерский р-н, г. Озерск, ул. Советская, д. 4А
              </th>
              <th className="results__tb">
                Кайбулаева Л. У. +74012924900
              </th>
              <th className="results__tb">
                28.08.2022
              </th>
              <th className="results__tb">
                1443643
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default FindResults;
