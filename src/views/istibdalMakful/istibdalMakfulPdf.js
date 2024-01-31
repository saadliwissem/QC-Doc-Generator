import React from 'react'
import { CCardBody, CButton } from '@coreui/react'
import { usePDF } from 'react-to-pdf'
import QClogo from '../../assets/images/QClogo.png'
import PdfContent from './PdfContent'
const IstibdalMakfulPdf = (makfulHali) => {
  //pdf dependencies
  const { toPDF, targetRef } = usePDF({ filename: 'generated-pdf.pdf' })

  const downloadPdf = () => {
    toPDF(targetRef.current)
  }

  console.log(makfulHali.istibdal)
  //   console.log(makfulHali.makfulHali)

  return (
    <CCardBody style={{ backgroundColor: 'white', paddingBottom: '100%' }}>
      <div>
        <CButton className="m-3" color="primary" onClick={downloadPdf}>
          Download PDF
        </CButton>
        <div
          className="page"
          style={{
            margin: '120px',
            position: 'relative', // Important for positioning the content within the PDF
            width: '210mm', // A4 page width
            height: '297mm', // A4 page height
          }}
        >
          <div style={{ border: '1px solid #ddd' }}>
            <div
              ref={targetRef}
              dir="rtl"
              style={{
                fontSize: '20px',
                fontFamily: 'sans-serif',
                lineHeight: '1.5',
              }}
            >
              <div style={{ padding: '20px', paddingTop: 6 }}>
                <PdfContent makfulHali={makfulHali} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div style={{ padding: '40px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  className="headerone"
                >
                  <div className="headerRihgt">
                    <div style={{ fontWeight: 'bold', fontSize: '22px' }}>مكتب تونس</div>
                    <div style={{ fontWeight: 'bold', fontSize: '22px' }}>
                      قسم الرعاية االجتماعية والكفاالت
                    </div>
                  </div>
                  <img
                    src={QClogo}
                    style={{
                      width: '150px',
                      height: '120px',
                      marginBottom: '60px',
                    }}
                    alt="QC Logo"
                  />
                </div>
                <div className="title">- معلومات عن المكفول الجديد:</div>
                <br></br>
                <table>
                  <tbody>
                    <tr>
                      <td>فئة المكفول الحالي</td>
                      <td> {makfulHali.makfulJadid.situation}</td>
                    </tr>
                    <tr>
                      <td>كود المكفول </td>
                      <td>{makfulHali.makfulJadid.code}</td>
                    </tr>
                    <tr>
                      <td>االسم كامل</td>
                      <td>{makfulHali.makfulJadid.nom}</td>
                    </tr>
                    <tr>
                      <td>الجنس</td>
                      <td>{makfulHali.makfulJadid.sexe}</td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <div className="title">- معلومات عن اإلستبدال:</div>
                <br></br>
                <table>
                  <tbody>
                    <tr>
                      <td>رقم طلب االستبدال</td>
                      <td>{makfulHali.istibdal.num}</td>
                    </tr>
                    <tr>
                      <td>تاريخ الطلب </td>
                      <td>{makfulHali.istibdal.askDate}</td>
                    </tr>
                    <tr>
                      <td>تاريخ تفعيل اإلستبدال</td>
                      <td>{makfulHali.istibdal.confirmDate}</td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <div className="title">مالحظات : </div>
                {makfulHali.istibdal.note ||
                  '......................................................................................................' +
                    ' ....................................................'}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className="title">إعتماد الجهة المسؤولة </div> : (كتابة اإلسم واإلمضاء)
                </div>
                <br></br>
                <table>
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td>إعتماد المشرف االجتماعي</td>
                      <td>إعتماد مسؤول الرعاية االجتماعية</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 60 }}> </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CCardBody>
  )
}
export default IstibdalMakfulPdf
