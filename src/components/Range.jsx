import '../sections/pipeline/inde.scss'
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Range({
  label = '',
  toconvert=1,
  min = 0,
  max = 1,
  step = 0.1,
  defaultValue = 0.5,
  unit = '',
  precision = 2,
  onChange
}) {
  return (
    <Form.Group className="mb-2">

      {/* Label + Value */}
      <div className="d-flex justify-content-between">
        <Form.Label className='custom-label' style={{ fontSize: '12px',color:'#aaa' }}>{label}</Form.Label>
        <span style={{ fontSize: '11px', fontWeight: 600, display:'flex' ,marginBlockEnd:'1px' }}>

           <Container>
      <Row className="justify-content-md-center" style={{ color:'#aaa' ,fontSize: '12px', fontWeight: 600 }}>
        <Col sm='auto'style={{ fontSize: '12px', fontWeight:600}}>{unit}={defaultValue.toFixed(precision)}</Col>
        <Col md='auto' style={{ fontSize: '12px', fontWeight: 600 }} >{toconvert}=
                    {toconvert=='Psi'?(defaultValue*14.5037738).toFixed(3):null}
                    {toconvert=='ºF'?(defaultValue*9/5+32).toFixed(3):null}
                    {toconvert=='inch'?(defaultValue/25.4).toFixed(3):null}
        </Col>
      </Row>
      </Container>       
        </span>
      </div>

      {/* Range */}
      <Form.Range
        min={min}
        max={max}
        step={step}
        toconvert={toconvert}
        value={defaultValue}
        onChange={(e)=>onChange(parseFloat(e.target.value))}
      />

    </Form.Group>
  );
}

export default Range;