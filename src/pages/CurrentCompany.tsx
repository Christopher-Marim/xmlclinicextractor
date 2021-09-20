
interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

export function CurrentCompany(){
    function handleChange(event: InputProps)
    {
        console.log(event.target.files)
    }
    return(
        <div>
            AAAAAAAAA
            <input type="file" onChange={handleChange}></input>
        </div>
    )
}