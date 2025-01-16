import {toast } from 'react-toastify';

export const handleCopy = (text:string)=>{
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Text Copied");
});
};