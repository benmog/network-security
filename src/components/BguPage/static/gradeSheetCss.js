export const css = `body
{
    background-color: #E5E8F2;
    font-size: 19px;
}

img {
    display: block;
    margin: 0 auto;
}

/**********HEADINGS***********/
h1, h2, h3, h4, h5, h6
{
    color: #141823;
    font-weight: 200;
    font-size: 19px;
    margin-bottom: 0px;
}

/*****************************/

h1
{
    font-size: 27px;
    font-family: Arial;
    font-weight: bold;
    text-align: center;
}

h2
{
    font-size: 23px;
    font-family: Arial;
    font-weight: bold;
    text-align: center;
}
h3
{
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    text-align: center;
}

engh3
{
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    text-align: left;
}

table, td, th
{
    border: 1px solid gray
}
.myEngh2
{
    font-size: 23px;
    font-family: Arial;
    font-weight: bold;
    text-align: left;
    color: #b30000;
}

.myHebh2
{
    font-size: 23px;
    font-family: Arial;
    font-weight: bold;
    text-align: right;
    color: #b30000;
}
.myBEngh2
{
    font-size: 23px;
    font-family: Arial;
    font-weight: bold;
    text-align: left;
}

.myBHebh2
{
    font-size: 23px;
    font-family: Arial;
    font-weight: bold;
    text-align: right;
}
.myBEngh3
{
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    text-align: left;
}

.myBHebh3
{
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    text-align: right;
}
a:focus
{
    outline: blue solid 3px;
}

input:focus
{
    outline: blue solid 3px;
}

input.textEntryHeb
{
    width:400px;
    border: 1px solid #141823;
    font-family: Arial;
    font-size: 16px;
    text-align: right;
}

input.textEntryEng
{
    width: 400px;
    border: 1px solid #141823;
    font-family: Verdana;
    font-size: 16px;
    text-align: left;
    direction: ltr;
}

input.textEntryEngLtr
{
    width: 400px;
    border: 1px solid #141823;
    font-family: Verdana;
    font-size: 16px;
    text-align: left;
    direction: ltr;
}

input.textShortEntryHeb
{
    width:200px;
    border: 1px solid #141823;
    font-family: Arial;
    font-size: 16px;
    text-align: right;
}

input.textShortEntryEng
{
    width: 200px;
    border: 1px solid #141823;
    font-family: Verdana;
    font-size: 16px;
    text-align: left;
    direction: ltr;
}

.buttonLongEntry
{
    width: 200px;
    border: 1px solid #141823;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
    background-color: #5F78AB;
    color: White;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
}

.buttonVeryLongEntry
{
    width: 400px;
    border: 1px solid #141823;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
    background-color: #5F78AB;
    color: White;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
}
.buttonLongEntry:hover
{
    background-color: #3B5998;
}



.buttonEntry
{
    width: 120px;
    border: 1px solid #141823;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
    background-color: #5F78AB;
    color: White;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
}

.buttonEntry:hover
{
    background-color: #3B5998;
}

.buttonSmallEntry
{
    width: 150px;
    border: 1px solid #141823;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-color: #5F78AB;
    color: White;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
}

.buttonSmallEntry:hover
{
    background-color: #3B5998;
}
.redhebText
{
    font-family: Arial;
    text-align: right;
    direction: rtl;
    font-size: 16px;
    color: #b30000;
    font-weight: bold;
}

.redengText
{
    font-family: Verdana;
    text-align: left;
    font-size: 16px;
    color: #b30000;
    font-weight: bold;
}

.hebText
{
    font-family: Arial;
    text-align: right;
    direction: rtl;
    font-size: 16px;
}

.engText
{
    font-family: Verdana;
    text-align: left;
    font-size: 16px;
}
.hebLargerText
{
    font-family: Arial;
    text-align: right;
    direction: rtl;
    font-size: 18px;
}

.engLargerText
{
    font-family: Verdana;
    text-align: left;
    font-size: 18px;
}

.Table
{
    display: table;
}
.ETable
{
    display: table;
    text-align: left;
}
.HTable
{
    display: table;
    text-align: right;
}
.Title
{
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
.Heading
{
    display: table-row;
    font-weight: bold;
    text-align: center;
}
.Row
{
    display: table-row;
    padding-top: 5px;
    padding-bottom: 5px;

}
.Cell
{
    display: table-cell;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
}

.simpleRow
{
    width:auto;
    clear:both;
}
.simpleCell
{
    float:right;
    width:400px;
}
.hebLabelCell
{
    float:right;
    width:200px;
}
.hebInputCell
{
    float:right;
    width:400px;
}
.engLabelCell
{
    float:left;
    width:200px;
}
.engInputCell
{
    float:left;
    width:400px;
}
.myBreak
{
    min-height:1em;
    margin:0 0 10px;
}
.BR
{
    min-height:2px;
}
.smallp {
    display: block;
    margin-top: 0em;
    margin-bottom: 0em;
    margin-left: 0;
    margin-right: 0;
}
.hidden {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
}

#skiptocontent a {
    padding: 6px;
    transition:top 1s ease-out, background 1s linear;
    right: 0px; top: -40px;
    color: white;
    border-right-color: white;
    border-bottom-color: white;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-right-style: solid;
    border-bottom-style: solid;
    position: absolute;
    z-index: 100;
    border-bottom-right-radius: 8px;
    -webkit-transition: top 1s ease-out, background 1s linear;
    overflow: hidden;
}

#skiptocontent a:focus {
    background: rgb(191, 23, 34);
    outline: 0px;
    transition:top 0.1s ease-in, background 0.5s linear;
    right: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition: top .1s ease-in, background .5s linear;
}

div:focus {
    outline:none;
}



.engStyled-select {
    font-size: 16px;
    font-family: Verdana;
    text-align: left;
}

.engStyled-select select {
    font-size: 16px;
    font-family: Verdana;
    text-align: left;
}

.engStyled-select option.service-small {
    font-size: 16px;
    font-family: Verdana;
    text-align: left;
}
.hebStyled-select {
    font-size: 16px;
    font-family: Arial;
    text-align: right;
    direction: rtl;
}

.hebStyled-select select {
    font-size: 16px;
    font-family: Arial;
    text-align: right;
    direction: rtl;
}

.hebStyled-select option.service-small {
    font-size: 16px;
    font-family: Arial;
    text-align: right;
    direction: rtl;
}

`;
export default css;