import { toast } from 'react-toastify'
import './styles.css'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  const saveToClipboard = async () => {

    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`)
        toast.success('Cor copiada para área de transferencia !')
      } catch (error) {
        toast.error('Falha ao copiar cor, tente novamente !')
      }
    } else {
      toast.error('Indisponivel essa função no seu navegador')
    }
  }
  return (
    <article
      onClick={ saveToClipboard }
      className={ index > 10 ? 'color color-light' : 'color' }
      style={ { background: `#${hex}` } }
    >
      <p className='percent-value'>{ weight }%</p>
      <p className='color-value'>#{ hex }</p>
    </article>
  )
}

export default SingleColor
