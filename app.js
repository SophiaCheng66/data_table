const input = document.getElementById('action__input_1')
const darkModeToggle = document.getElementById('dark__mode__toggle')

const BodyRows = document.querySelectorAll('.table__body__row')
const BodyRow1 = document.querySelector('.table__body__row1')
const BodyRow2 = document.querySelector('.table__body__row2')

const BodyRow3 = document.querySelector('.table__body__row3')

const BodyRow4 = document.querySelector('.table__body__row4')

const BodyRow5 = document.querySelector('.table__body__row5')

const BodyRow6 = document.querySelector('.table__body__row6')


const BodyRow7 = document.querySelector('.table__body__row7')

const BodyRow8 = document.querySelector('.table__body__row8')

const BodyRow9 = document.querySelector('.table__body__row9')

const BodyRow10 = document.querySelector('.table__body__row10')

const BodyRow11 = document.querySelector('.table__body__row11')

const BodyRow12 = document.querySelector('.table__body__row12')

const BodyRow13 = document.querySelector('.table__body__row13')



const test = document.querySelector('.test')

const test2 = document.querySelector('.test2')

const test3 = document.querySelector('.test3')

const test4 = document.querySelector('.test4')

const test5 = document.querySelector('.test5')

const test6 = document.querySelector('.test6')

const test7 = document.querySelector('.test7')

const test8 = document.querySelector('.test8')

const test9 = document.querySelector('.test9')

const test10 = document.querySelector('.test10')

const test11 = document.querySelector('.test11')

const test12 = document.querySelector('.test12')

const test13 = document.querySelector('.test13')

const checkBox = document.querySelectorAll('.table__cell--checkbox')

const tBody = document.querySelector('.table__body')
const toggleMenu = event => {
  const menu = document.getElementById("action__menu_1")
  menu.classList.toggle('hidden')
  console.log(event.target)
}

// let dataId = 0
// for (i = 0; i < BodyRows.length; i++) {
//   let dataId = 0
//   dataId += 1
//   console.log(dataId)
//   console.log(dataId)
// }




// BodyRows.forEach(BodyRow => {
//   console.log(BodyRow)
//   let dataId = 0
//   for (i = 0; i < BodyRows.length; i++) {
//     // let dataId = 0
//     dataId += 1
//     console.log(dataId)
//   }
//   BodyRow.classList.add(dataId)


// })

// for (i = 0; i < 10; i++) {
//   let dataId = 0
//   dataId = i + 1
//   console.log(dataId)
// }









/* <html lang="en" data-theme="dark"> */
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');  //會在html的地方加上data-theme="dark"，再次點擊則變成data-theme="light"
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

}

function changeBg(event) {
  // console.log(event.target)
  if (event.target.matches('.test')) {

    BodyRow1.classList.toggle('check')

  } else if (event.target.matches('.test2')) {
    BodyRow2.removeAttribute('style')
    BodyRow2.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow2.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test3')) {
    BodyRow3.classList.toggle('check')
  } else if (event.target.matches('.test4')) {
    BodyRow4.removeAttribute('style')
    BodyRow4.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow4.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test5')) {
    BodyRow5.classList.toggle('check')
  } else if (event.target.matches('.test6')) {
    BodyRow6.removeAttribute('style')
    BodyRow6.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow6.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test7')) {
    BodyRow7.classList.toggle('check')
  } else if (event.target.matches('.test8')) {
    BodyRow8.removeAttribute('style')
    BodyRow8.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow8.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test9')) {
    BodyRow9.classList.toggle('check')
  } else if (event.target.matches('.test10')) {
    BodyRow10.removeAttribute('style')
    BodyRow10.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow10.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test11')) {
    BodyRow11.classList.toggle('check')
  } else if (event.target.matches('.test12')) {
    BodyRow12.removeAttribute('style')
    BodyRow12.classList.toggle('check')
    if (!event.target.checked) {
      BodyRow12.setAttribute('style', 'background-color : #E9E9E9')
    }
  } else if (event.target.matches('.test13')) {
    BodyRow13.classList.toggle('check')
  }

  // console.log(event.target.check)
}









// function changeBg2(event) {
//   // console.log(event.target)
//   if (event.target.checked) {
//     BodyRow1.classList.add('check')
//   } else {
//     BodyRow1.classList.remove('check')
//   }
//   // console.log(event.target.check)
// }





// const tBodyRow = document.querySelectorAll("td")
// const tBody = document.querySelector(".table__body")


// let content = ''
// for (i = 0; i < 20; i++) {
//   // tBodyRow.forEach((item) => {
//   //   // console.log(item)
//   //   return item
//   content += `
// <tr class="table__row table__body__row">
//           <td class="table__cell table__cell--checkbox">
//             <input type="checkbox" />
//           </td>
//           <td class="table__cell table__cell--id">ID</td>
//           <td class="table__cell table__cell--name">Name</td>
//           <td class="table__cell table__cell--advertiser">
//             <span class="cell__advertiser__line">Advertiser</span>
//             <span class="cell__advertiser__line  cell__advertiser__line--group">Group</span>
//           </td>

//           <td class="table__cell table__cell--description">Description</td>
//           <td class="table__cell table__cell--price">Price</td>
//           <td class="table__cell table__cell--starttime">Start Time</td>
//           <td class="table__cell table__cell--endtime">End Time</td>
//           <td class="table__cell table__cell--action">
//             <img class="cell__action__icon" src="icon.png" id="action__input_1" alt="menu"
//               style="width:25px;height:17.5px;">
//             <!--menu-->
//             <div class="action__menu  hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_1"
//               id="action__menu_1">
//               <menu class="meun__body">
//                 <menuitem class="menu__item">
//                 <img src="duplicate.png" class="menu__item__icon" alt="">
//                 <span>Duplicate</span>
//                 </menuitem>

//                 <menuitem class="menu__item">
//                 <img src="pencil-edit.png" class="menu__item__icon" alt="">
//                 <span>Edit</span>
//                 </menuitem>

//                 <menuitem class="menu__item">
//                 <img src="trash.png" class="menu__item__icon" alt="">
//                 <span>Delete</span>
//                 </menuitem>

//               </menu>
//             </div>

//           </td>

//         </tr>`

// }
// tBody.innerHTML = content



input.addEventListener('click', toggleMenu)
darkModeToggle.addEventListener('change', darkModeToggleHandler)
tBody.addEventListener('click', changeBg)
