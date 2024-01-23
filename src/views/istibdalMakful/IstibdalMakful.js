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
    'مرض المكفول أو أمه',
    'الفقر /الوضعية االجتماعية ',
    'قرب تجاوز سن الكفالة',
    ' يتيم حامل إلعاقة',
    'عدد أفراد األسرة أكثر من 5',
    'وفاة األم واألب',
    ' طول فترة التسويق',
    'إجمالي النقاط',
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

    // Reset form fields after successful submission
    setFormData({
      selectedOptions: Array(options.length).fill(false),
      otherOption: '',
    })

    // Show success message
    alert('Form submitted successfully!')
  }

  return (
    <div dir="rtl">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>إجراء استبدال مكفول</strong>
          </CCardHeader>
          <CCardBody>
            <CFormLabel
              htmlFor="fullName"
              style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}
            >
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
            <CFormLabel
              htmlFor="fullName"
              style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}
            >
              معيار الإستبدال
            </CFormLabel>

            {options2.map((option, index) => (
              <CFormCheck
                key={index}
                type="checkbox"
                label={'-' + option}
                id={`option-${index + 1}`}
                checked={formData2.selectedOptions[index]}
                onChange={() => handleCheckboxChange2(index)}
              />
            ))}
          </CCardBody>
          <CCardBody>
            <CFormLabel
              htmlFor="fullName"
              style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}
            >
              معلومات عن المكفول الحالي
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">فئة المكفول الحالي</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormSelect aria-label="Default select example">
                <option value="">يتيم</option>
                <option value="male">أسرة </option>
                <option value="female">طالب</option>
                <option value="">شخص حامل لإعاقة</option>
              </CFormSelect>
            </CInputGroup>
            <CFormLabel htmlFor="ownerName">كود المكفول</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                //onChange={handleInputChange}
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
                //onChange={handleInputChange}
                placeholder="الإسم الكامل"
                aria-describedby="basic-addon3"
              />
            </CInputGroup>
            <CFormLabel htmlFor="Longitude">الجنس</CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option value="female">ذكر</option>
              <option value="">أنثى</option>
            </CFormSelect>
          </CCardBody>
          <CCardBody>
            <CFormLabel
              htmlFor="fullName"
              style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}
            >
              معلومات عن المكفول الجديد
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">فئة المكفول الجديد</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormSelect aria-label="Default select example">
                <option value="">يتيم</option>
                <option value="male">أسرة </option>
                <option value="female">طالب</option>
                <option value="">شخص حامل لإعاقة</option>
              </CFormSelect>
            </CInputGroup>
            <CFormLabel htmlFor="ownerName">كود المكفول</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                //onChange={handleInputChange}
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
                //onChange={handleInputChange}
                placeholder="الإسم الكامل"
                aria-describedby="basic-addon3"
              />
            </CInputGroup>
            <CFormLabel htmlFor="Longitude">الجنس</CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option value="female">ذكر</option>
              <option value="">أنثى</option>
            </CFormSelect>
          </CCardBody>
          <CCardBody>
            <CFormLabel
              htmlFor="fullName"
              style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}
            >
              معلومات عن الإستبدال
            </CFormLabel>
            <br></br>
            <CFormLabel htmlFor="pharmacyName">رقم طلب الإستبدال</CFormLabel>

            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                //onChange={handleInputChange}
                placeholder="رقم طلب الإستبدال"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <CFormLabel htmlFor="PhoneNumber">تاريخ الطلب</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                //onChange={handleInputChange}
                placeholder="تاريخ الطلب"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>

            <CFormLabel htmlFor="Longitude">تاريخ تفعيل الإستبدال</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                name="ownerName"
                //value="value"
                //onChange={handleInputChange}
                placeholder="تاريخ تفعيل الإستبدال"
                aria-label="Recipient&#39;s username"
                aria-describedby="basic-addon2"
              />
            </CInputGroup>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">ملاحظات</CFormLabel>
              <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
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
