import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CButton,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'

const IstibdalMakful = () => {
  const options = [
    'وفاة',
    'صعوبة المتابعة',
    'إزدواجية الكفالة',
    ' إيقاف التعامل مع الجمعية',
    'الهجرة',
    'الزواج',
    'تحسن الوضعية',
    'عدم اإللتزام بالتقرير',
    'طلب أهل المكفول',
    'تخرج الطالب',
    ' إنقطاع الطالب عن الدراسة',
    'أخرى',
  ]
  const options2 = [
    'مرض المكفول أو أمه (4ن)',
    'الفقر /الوضعية االجتماعية (3ن) ',
    'قرب تجاوز سن الكفالة (2ن)',
    ' يتيم حامل إلعاقة (3ن)',
    'عدد أفراد األسرة أكثر من 5 (3ن)',
    'وفاة األم واألب (3ن)',
    ' طول فترة التسويق (2ن)',
  ]
  const [formData, setFormData] = useState({
    selectedOptions: Array(options.length).fill(false),
    otherOption: '',
  })
  const [formData2, setFormData2] = useState({
    selectedOptions: Array(options2.length).fill(false),
  })
  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...formData.selectedOptions]
    newSelectedOptions[index] = !newSelectedOptions[index]
    setFormData({ ...formData, selectedOptions: newSelectedOptions })
  }
  const handleCheckboxChange2 = (index) => {
    const newSelectedOptions = [...formData2.selectedOptions]
    newSelectedOptions[index] = !newSelectedOptions[index]
    setFormData2({ ...formData2, selectedOptions: newSelectedOptions })
  }

  const handleOtherOptionChange = (event) => {
    setFormData({ ...formData, otherOption: event.target.value })
  }

  const handleSubmit = () => {
    // Handle submission logic, e.g., send data to the server
    console.log(formData)
    console.log(formData2)
    console.log(makfulHali)
    console.log(makfulJadid)
    console.log(istibdal)

    // Reset form fields after successful submission
    setFormData({
      selectedOptions: Array(options.length).fill(false),
      otherOption: '',
    })
    setFormData2({
      selectedOptions: Array(options.length).fill(false),
    })

    // Show success message
    alert('Form submitted successfully!')
  }

  //makful 7ali info

  const [makfulHali, setMakfulHali] = useState({
    situation: 'يتيم',
    code: '',
    nom: '',
    sexe: 'ذكر',
  })
  const handleOldSituationChange = (e) => {
    setMakfulHali({ ...makfulHali, situation: e.target.value })
  }
  const handleOldCodeChange = (e) => {
    setMakfulHali({ ...makfulHali, code: e.target.value })
  }
  const handleOldNomChange = (e) => {
    setMakfulHali({ ...makfulHali, nom: e.target.value })
  }
  const handleOldSexeChange = (e) => {
    setMakfulHali({ ...makfulHali, sexe: e.target.value })
  }
  //makful jadid info

  const [makfulJadid, setMakfulJadid] = useState({
    situation: 'يتيم',
    code: '',
    nom: '',
    sexe: 'ذكر',
  })
  const handleNewSituationChange = (e) => {
    setMakfulJadid({ ...makfulJadid, situation: e.target.value })
  }
  const handleNewCodeChange = (e) => {
    setMakfulJadid({ ...makfulJadid, code: e.target.value })
  }
  const handleNewNomChange = (e) => {
    setMakfulJadid({ ...makfulJadid, nom: e.target.value })
  }
  const handleNewSexeChange = (e) => {
    setMakfulJadid({ ...makfulJadid, sexe: e.target.value })
  }

  //
  const [istibdal, setistibdal] = useState({
    num: 'يتيم',
    askDate: '',
    confirmDate: '',
    note: '',
  })
  const handleNum = (e) => {
    setistibdal({ ...istibdal, num: e.target.value })
  }
  const handleAskDate = (e) => {
    setistibdal({ ...istibdal, askDate: e.target.value })
  }
  const handleConfirmDate = (e) => {
    setistibdal({ ...istibdal, confirmDate: e.target.value })
  }
  const handleNote = (e) => {
    setistibdal({ ...istibdal, note: e.target.value })
  }
  return (
    <div dir="rtl">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>إجراء استبدال مكفول</strong>
          </CCardHeader>
          <CCardBody>
            <CFormLabel style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>
              أسباب الإستبدال
            </CFormLabel>

            {options.map((option, index) => (
              <CFormCheck
                key={index}
                type="checkbox"
                label={'-' + option}
                id={`option-${index + 1}`}
                checked={formData.selectedOptions[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            ))}

            {formData.selectedOptions[options.length - 1] && (
              <>
                <CFormLabel htmlFor="otherOption">(حدد)</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    id="otherOption"
                    type="text"
                    value={formData.otherOption}
                    onChange={handleOtherOptionChange}
                    placeholder="حدد السبب"
                    aria-label="Specify other option"
                  />
                </CInputGroup>
              </>
            )}
          </CCardBody>
          <CCardBody>
            <CFormLabel style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>
              معيار الإستبدال
            </CFormLabel>
            {options2.map((option, index) => (
              <CFormCheck
                key={index}
                type="checkbox"
                label={'-' + option}
                id={`option2-${index + 1}`}
                checked={formData2.selectedOptions[index]}
                onChange={() => handleCheckboxChange2(index)}
              />
            ))}
            <br></br>
            إجمالي النقاط : /20
          </CCardBody>

          <CCardBody>
            <CFormLabel style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>
              معلومات عن المكفول الحالي
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">فئة المكفول الحالي</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormSelect onChange={handleOldSituationChange} aria-label="Default select example">
                <option value="يتيم">يتيم</option>
                <option value="أسرة">أسرة </option>
                <option value="طالب">طالب</option>
                <option value="شخص حامل لإعاقة">شخص حامل لإعاقة</option>
              </CFormSelect>
            </CInputGroup>
            <CFormLabel htmlFor="ownerName">كود المكفول</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                onChange={handleOldCodeChange}
                placeholder="كود المكفول"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="PhoneNumber">الإسم الكامل</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                id="PhoneNumber"
                name="phoneNumber"
                onChange={handleOldNomChange}
                placeholder="الإسم الكامل"
                aria-describedby="basic-addon3"
              />
            </CInputGroup>
            <CFormLabel htmlFor="Longitude">الجنس</CFormLabel>
            <CFormSelect onChange={handleOldSexeChange} aria-label="Default select example">
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </CFormSelect>
          </CCardBody>
          <CCardBody>
            <CFormLabel style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>
              معلومات عن المكفول الجديد
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">فئة المكفول الجديد</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormSelect onChange={handleNewSituationChange} aria-label="Default select example">
                <option value="يتيم">يتيم</option>
                <option value="أسرة">أسرة </option>
                <option value="طالب">طالب</option>
                <option value="شخص حامل لإعاقة">شخص حامل لإعاقة</option>
              </CFormSelect>
            </CInputGroup>
            <CFormLabel htmlFor="ownerName">كود المكفول</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                onChange={handleNewCodeChange}
                placeholder="كود المكفول"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="PhoneNumber">الإسم الكامل</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                id="PhoneNumber"
                name="phoneNumber"
                //value={pharmacyData.phoneNumber}
                onChange={handleNewNomChange}
                placeholder="الإسم الكامل"
                aria-describedby="basic-addon3"
              />
            </CInputGroup>
            <CFormLabel htmlFor="Longitude">الجنس</CFormLabel>
            <CFormSelect onChange={handleNewSexeChange} aria-label="Default select example">
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </CFormSelect>
          </CCardBody>
          <CCardBody>
            <CFormLabel style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>
              معلومات عن الإستبدال
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">رقم طلب الإستبدال</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                onChange={handleNum}
                placeholder="رقم طلب الإستبدال"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="PhoneNumber">تاريخ الطلب</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                type="date"
                //value="value"
                onChange={handleAskDate}
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>

            <CFormLabel htmlFor="Longitude">تاريخ تفعيل الإستبدال</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                type="date"
                //value="value"
                onChange={handleConfirmDate}
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">ملاحظات</CFormLabel>
              <CFormTextarea
                onChange={handleNote}
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormTextarea>
            </div>
          </CCardBody>
        </CCard>

        <CButton className="m-3" color="primary" onClick={handleSubmit}>
          Submit
        </CButton>
        <CButton
          className="m-3"
          color="danger"
          onClick={() =>
            setFormData({
              selectedOptions: Array(options.length).fill(false),
              otherOption: '',
            })
          }
        >
          Clear All
        </CButton>
      </CCol>
    </div>
  )
}

export default IstibdalMakful
