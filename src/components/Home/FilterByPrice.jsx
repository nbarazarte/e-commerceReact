
import { useForm } from 'react-hook-form'


const FilterByPrice = ({setFromTo}) => {

    const { reset, register, handleSubmit } = useForm()

    const submit = (data) =>{
        //console.log(data);
        setFromTo(data)
        reset({
            from: '',
            to: ''
        })
    }

  return (
    <article>
        <h3>
            Price
        </h3>
        <hr />
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From</label>
                <input {...register('from')} type="number" id="from"/>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')}  type="number" id="to"/>
            </div>
            <button>Filter by Price</button>           
        </form>
    </article>
  )
}

export default FilterByPrice