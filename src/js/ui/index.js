/**
 * UI 
 * Index.js
 */

import {formListener} from "./btn.js"
import {btnListener} from './btn.js'
import {CheckLocal} from './local.js'


export default () => {
    formListener()
    btnListener()
    CheckLocal()
}