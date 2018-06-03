import React from "react"

import "./UserForm.scss"
import block from "../../helpers/BEM"

const b = block("UserForm")

const UserFieldSet = ({children, meta = {}}) => (
    <div className={b("input-field")}>
        {children}

        {(meta.touched && //prettier-ignore
            (meta.error && <span className={b("error")}>{meta.error}</span>)) ||
        (meta.warning && <span className={b("warning")}>{meta.warning}</span>)}
    </div>
)

export default UserFieldSet
