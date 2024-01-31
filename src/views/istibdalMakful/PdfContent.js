import React from 'react'
import QClogo from '../../assets/images/QClogo.png'
import './PdfContent.css'
const PdfContent = (makfulHali) => {
  console.log(makfulHali.makfulHali.formData.selectedOptions[0])
  return (
    <>
      <div>
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
            style={{ width: '150px', height: '120px', marginBottom: '60px' }}
            alt="QC Logo"
          />
        </div>
        <div
          style={{ marginTop: -35, fontWeight: 'bold', fontSize: '25px' }}
          className="centerHeader"
        >
          إجراء استبدال مكفول
        </div>
        <br></br>
        <div className="title">- أسباب اإلستبدال:</div>

        <div>
          وفاة ({makfulHali.makfulHali.formData.selectedOptions[0] ? 'X' : ' '}) صعوبة المتابعة (
          {makfulHali.makfulHali.formData.selectedOptions[1] ? 'X' : ' '} ) إزدواجية الكفالة (
          {makfulHali.makfulHali.formData.selectedOptions[2] ? 'X' : ' '} ) إيقاف التعامل مع الجمعية
          ( {makfulHali.makfulHali.formData.selectedOptions[3] ? 'X' : ' '}) الهجرة ({' '}
          {makfulHali.makfulHali.formData.selectedOptions[4] ? 'X' : ' '}) الزواج ({' '}
          {makfulHali.makfulHali.formData.selectedOptions[5] ? 'X' : ' '}) تحسن الوضعية (
          {makfulHali.makfulHali.formData.selectedOptions[6] ? 'X' : ' '} ) عدم اإللتزام بالتقرير (
          {makfulHali.makfulHali.formData.selectedOptions[7] ? 'X' : ' '} ) طلب أهل المكفول (
          {makfulHali.makfulHali.formData.selectedOptions[8] ? 'X' : ' '} ) تخرج الطالب ({' '}
          {makfulHali.makfulHali.formData.selectedOptions[9] ? 'X' : ' '}) إنقطاع الطالب عن الدراسة
          ({makfulHali.makfulHali.formData.selectedOptions[10] ? 'X' : ' '} ) أخرى (
          {makfulHali.makfulHali.formData.selectedOptions[11] ? 'X' : ' '} )
        </div>

        <div>ذكر السبب في حال كان أخرى:</div>
        <div>
          {makfulHali.makfulHali.formData.selectedOptions[11]
            ? makfulHali.makfulHali.formData.otherOption
            : '......................................................................................................' +
              <br></br> +
              '......................................................................................................'}
        </div>
        <div className="title">- معيار اإلستبدال 20/ نقطة:</div>

        <table>
          <tbody>
            <tr>
              <td>مرض المكفول أو أمه </td>
              <td>(4ن)</td>
              <td>عدد أفراد األسرة أكثر من 5</td>
              <td>(3ن)</td>
            </tr>
            <tr>
              <td>الفقر /الوضعية االجتماعية </td>
              <td>(3ن)</td>
              <td>وفاة األم واألب</td>
              <td>(3ن)</td>
            </tr>
            <tr>
              <td>قرب تجاوز سن الكفالة</td>
              <td>(2ن)</td>
              <td>طول فترة التسويق</td>
              <td>(2ن)</td>
            </tr>
            <tr>
              <td>يتيم حامل إلعاقة </td>
              <td>(3ن)</td>
              <td>جمالي النقاط</td>
              <td>.../20</td>
            </tr>
          </tbody>
        </table>
        <div>
          <ul className="list" dir="rtl" style={{ color: 'red' }}>
            <li>
              - تقاس الوضعية االجتماعية لألسرة بالمبلغ الذي تتحصل عليه شهريا (بطاقة عالج مجاني /
              بطاقة عالج تعريفة منخفضة/منحة شهرية أقل من200 د.ت) وعدد األفراد (أكثر من 4 أفراد)
              والوضعية السكنية (كراء) .
            </li>
            <li>- يراعى في اإلستبدال معيار توزع المكفولين حسب الجهات.</li>
          </ul>
        </div>
        <div className="title">- معلومات عن المكفول الحالي:</div>
        <table>
          <tbody>
            <tr>
              <td>فئة المكفول الحالي</td>
              <td> {makfulHali.makfulHali.makfulHali.situation}</td>
            </tr>
            <tr>
              <td>كود المكفول </td>
              <td>{makfulHali.makfulHali.makfulHali.code}</td>
            </tr>
            <tr>
              <td>االسم كامل</td>
              <td>{makfulHali.makfulHali.makfulHali.nom}</td>
            </tr>
            <tr>
              <td>الجنس</td>
              <td> {makfulHali.makfulHali.makfulHali.sexe}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PdfContent
