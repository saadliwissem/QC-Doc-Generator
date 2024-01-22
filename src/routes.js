import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

//pharmacies
const Pharmacies = React.lazy(() => import('./views/pharmacies/pharmaciesList'))
const AddPharmacies = React.lazy(() => import('./views/pharmacies/addPharmacy'))
const IstibdalMakful = React.lazy(() => import('./views/istibdalMakful/IstibdalMakful'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/pharmacies', name: 'pharmacies', element: Pharmacies },
  { path: '/pharmacies/addPharmacy', name: 'Add a new pharmacies', element: AddPharmacies },
  { path: '/istibdalMakful', name: 'istibdalMakful', element: IstibdalMakful },
]

export default routes
