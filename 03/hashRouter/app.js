"use strict"

import Home from './views/screens/Home.js'
import Header from './views/components/Header.js'
import Footer from './views/components/Footer.js'
import MovieList from './views/screens/MovieList.js'
import Error404 from './views/screens/Error404.js'

import Utils from './services/Utils.js'

const routes = {
  '/'            : Home,
  '/movies'      : MovieList
}
const router = async () => {

  // 뷰 영역 설정
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementById('footer_container');

  header.innerHTML = await Header.render()
  await Header.after_render()
  footer.innerHTML = await Footer.render()
  await Footer.after_render()

  let request = Utils.parseRequestURL()

  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  content.innerHTML = await page.render()
  await page.after_render()

}

// hashchange 이벤트 등록
window.addEventListener('hashchange', router)

// 페이지 로드 이벤트 등록
window.addEventListener('load', router)