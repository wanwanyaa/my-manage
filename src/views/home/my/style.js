import styled from 'styled-components'
export const Mydata = styled.div`
  width:100%;
  min-height:0;
.main-content {
  background: #fff;
  margin: 0;
  padding: 8px 20px 24px;
  box-sizing: border-box;
  width:100%;
  height:100%;
  .row {
    margin-right: -12px;
    margin-left: -12px;
    width:100%;
    height:100%;
    .col{
      position: relative;
      min-height: 1px;
      width:100%;
      height:100%;
      .page-head {
        margin: 0 0 12px;
        border-bottom: 1px dotted #e2e2e2;
        padding-bottom: 16px;
        /* padding-top: 7px; */
        height:42px;
        box-sizing: border-box;
        .btn {
          float: right;
          margin-right: 23px;
          width: 100px;
          height: 30px;
        }
      }
      .page-body {
        min-height:0;
        height:400px;
        .show {
          box-sizing: border-box;
          text-align:center !important;
          width:25%;
          height:250px;
          box-sizing: border-box;
          float:left;
          .profile {
            border: 1px solid #CCC;
            background-color: #FFF;
            padding: 4px;
            display: inline-block;
            max-width: 100%;
            -moz-box-sizing: border-box;
            box-shadow: 1px 1px 1px rgba(0,0,0,0.15);
            box-sizing: border-box;
            text-align: center!important;
            width:190px;
            height:210px;
          }
          .space {
            max-height: 1px;
            min-height: 1px;
            overflow: hidden;
            margin: 12px 0;
            margin: 4px 0 3px;
          }
          .arrowed {
            background-color: #3a87ad!important;
            border-radius: 0;
            text-shadow: none;
            font-weight: normal;
            display: inline-block;
            width: 80%!important;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            position: relative;
            z-index: 1;
            padding: .3em .7em .4em;
            font-size: 14px;
            line-height: 1.3;
            width:243px;
            height: 28px;
            margin-left: 7px;
            margin-right: 7px;
            .inline {
              font-size: 14px;
              line-height: 1.3;
              color: #fff;
              text-align: center;
              white-space: nowrap;
              display: inline-block!important;
              position: relative;
              .user{
                /* color: #428bca; */
                text-decoration: none;
                box-sizing: border-box;
                .icon{

                }
                .white{
                  color:#fff!important;
                  text-align:center;
                }
              }
            }
          }
        }
        .showb {
          float:left;
          width:75%;
          height:100%;
          text-align:center;
          /* background-color: #3a87ad; */
          .ant-table-content{
            background:#F0F2F5;
              .ant-table-tbody {
              text-align:center;
              .ant-table-row {

                td:nth-child(2) {
                  background:#fff;
                  text-align:left;
                }
              }
            }
          }
        }
      }
      .page-foot {
        .ant-table-wrapper {
          margin-top:10px;
        }
      }
    }
  }
}

`