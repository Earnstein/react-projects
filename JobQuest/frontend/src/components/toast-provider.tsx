import { Toaster  } from 'sonner'


const  ToastProvider = () => {
  return (
    <Toaster richColors position='bottom-right' duration={2000}/>
  )
}

export default ToastProvider;