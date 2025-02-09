import React, { Component } from "react";
import styles from "../CSS/landingpage.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import SignIn from "./SignIn";

export const LandingPage = () => {
    // const location = useLocation();
    // const navigate = useNavigate();


    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img className={styles.car} src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-electric/highlights/evcreta-home_orignal-pc.jpg" alt="" />
            </div>
            <div className={styles.right}>
                <SignIn />
            </div>
        </div>
    )
}