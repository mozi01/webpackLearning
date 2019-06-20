import ShanshuiTu from './shanshui.jpg'
import './index.css'

var img = new Image();
img.src = ShanshuiTu;
img.classList.add('shanshui');

var dom = document.getElementById('root')
dom.append(img)