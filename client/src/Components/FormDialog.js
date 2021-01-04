import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    contentForm: {
        maxWidth: '300px',
    },
    textContent: {
        background: 'green',
    }
});
function FormDialog() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.contentForm}>
                <Grid item className={classes.titleForm}>
                    <Typography variant="h2" gutterBottom>
                        Форма обратной связи</Typography>
                </Grid>
                <Grid container className={classes.textContent}>
                    <Grid item>
                        <div className="firstName">
                            <label htmlFor="firstName">Имя</label>
                            <input
                                className=""
                                placeholder="Введите Ваше имя"
                                type="text"
                                // value={name}
                                name="name"
                            // ref={register({
                            //   required: "Введено некорректное значение",
                            //   pattern: {
                            //     value: /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z- \.]{1,20}$/,
                            //     message: "Введите действительное имя",
                            //   },
                            // })}
                            // onChange={updateName}
                            />

                        </div>
                    </Grid>
                    <Grid item>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className=""
                                placeholder="Введите Ваш Email"
                                type="email"
                                name="email"
                            // value={email}
                            // ref={register({
                            //   required: "Введено некорректное значение",
                            //   pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            //     message: "Введите действительный адрес электронной почты",
                            //   },
                            // })}
                            // onChange={updateEmail}
                            />

                        </div>
                    </Grid>
                    <Grid item>
                        <div className="phone">
                            <label htmlFor="phone">Номер телефона</label>
                            <input
                                className=" "
                                placeholder="Введите номер телефона"
                                type="text"
                                // value={phone}
                                name="phone"
                            // ref={register({
                            //   required: "Введено некорректное значение",
                            //   pattern: {
                            //     value: /^[0-9|\ |\-|\(|\)|\+]{10,14}[0-9|\ |\-|\(|\)]$/,
                            //     message: "Введите действительный номер телефона",
                            //   },
                            // })}
                            // onChange={updatePhone}
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="checkbox">

                            <input
                                id="check"
                                type="checkbox"
                                value="check"
                                name="tnc"
                            //   value={tnc}
                            // ref={register({
                            //   required: "Введено некорректное значение",
                            // })}
                            //   onChange={updateTnc}
                            />
                            <label className="check" for="check">
                            </label>

                            <span className="accept_use">Принимаю <a href="#" className="conditions">условия</a> использования</span>

                        </div>
                    </Grid>
                    <Grid item>
                        <div className="createAccount">
                            {/* <Link to="/login" style={{ width: "100%" }}> */}
                            {/* onClick={handleSubmit(onSubmit)} */}
                            <button type="submit" >
                                Зарегистрироваться</button>
                            {/* </Link> */}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );

}

export default FormDialog;
