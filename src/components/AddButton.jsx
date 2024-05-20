import './AddButton.css';

function AddButton({text, openModal}) {
  return (
    <div className='container'>
        <button className='button' onClick={openModal}>
            {text}
        </button>
    </div>
  )
}

export default AddButton