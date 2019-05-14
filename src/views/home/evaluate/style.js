import styled from 'styled-components'

export const PageHeader = styled.div `
  margin: 0 0 12px;
  border-bottom: 1px dotted #e2e2e2;
  padding-bottom: 16px;
  padding-top: 7px;
  .alert-success{
    color: #468847;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }
  .alert{
    font-size: 14px;
    border-radius: 0;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }
`
export const TableRaw = styled.div `
  table{
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    background-color: transparent;
    thead{
      display: table-header-group;
      tr{
        color: #707070;
        font-weight: normal;
        background: #f2f2f2;
        background-image: linear-gradient(to bottom,#f8f8f8 0,#ececec 100%);
        background-repeat: repeat-x;
        th{
          border-color: #DDD;
          font-weight: bold;
          border-bottom-width: 2px;
          padding: 8px;
          line-height: 1.428571429;
          text-align: center;
        }
      }
    }
    tbody{
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        &:hover{
          background: #f2f2f2;
        }
        td{
          font-family: 'Open Sans';
          font-size: 12px;
          color: #393939;
          border: 1px solid #ddd;
          padding: 8px;
          line-height: 1.428571429;
          vertical-align: top;
          border-radius: 0!important;
          .dataTables{
            line-height: 1.428571429;
            height:16px;
          }
          button{
            color: #FFF!important;
            border: 0px solid #FFF;
            line-height: 1.5;
            background-color: #87b87f;
            &:hover{
              background-color:#5cb85c;
              opacity:0.8;
            }
          }
        }
      }
    }
  }
`