import { useForm } from 'react-hook-form'
import * as yup  from 'yup'
import {yupResolver } from '@hookform/resolvers/yup'

interface CreateFormData {
    title: string;
    description: string

}

export function CreateForm() {
    const  schema = yup.object().shape({
        title: yup.string().required('You mast add title'),
        description: yup.string().required('You mast add description').max(50)
        

    })
    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const onCreatePost = (data: CreateFormData) => {
        console.log(data);
    }

    return(
       <form onSubmit={handleSubmit(onCreatePost)}>
          <input placeholder='Title' {...register('title')}/>
          <p>{errors.title?.message}</p>
          <textarea placeholder='Description' {...register('description')}/>
          <p>{errors.description?.message}</p>
          <input  type='Submit'/>
        </form>
    )
}