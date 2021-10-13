import './InputFields.css';

function InputFields({setFile}) {

    const camelCase = str => str.replace(/(-)(\w)/,'$2'.toUpperCase());

    const handleChange = (e) => {
        const files = e.target.files;
        const key = camelCase(e.target.name);
        setFile(key, files[0]);
        console.log(key, files[0]);
    }

    const inputs = [{
                        name: "logo",
                        display: "Logo",
                        type: "file",
                        accept: "image/png, image/jpg, image/svg"
                    },
                    {
                        name: "header",
                        display: "Header",
                        type: "file",
                        accept: "image/png, image/jpg, image/svg"
                    },
                    {
                        name: "background",
                        display: "Background",
                        type: "file",
                        accept: "image/png, image/jpg, image/svg"
                    },
                    {
                        name: "e-signature",
                        display: "E-signature",
                        type: "file",
                        accept: "image/png, image/jpg, image/svg"
                    },
                    {
                        name: "csv-json",
                        display: "CSV/JSON",
                        type: "file",
                        accept: ".csv, application/JSON, .json"
                    }]

    return (
        <>
            {inputs.map((field,i) => <InputField key={i} id={field.name+'-'+i} name={field.name} display={field.display} type={field.type} accept={field.accept} onChange={(event) => handleChange(event)}></InputField>)}
        </>
    )
}

function InputField({id, name, display, type, accept, onChange}) {

    return (
        <div className="form-input-lockup">
            <div className="form-field-label">
                {display}: 
            </div>
            <div className="form-field">
                <input id={id} type={type} name={name} accept={accept} onChange={onChange} />
            </div>
        </div>

    )

}

export default InputFields;