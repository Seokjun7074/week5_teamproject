import React from "react";
// <<<<<<< HEAD
import CafeInfo from "../../components/detail/CafeInfo";
import CafeReview from "../../components/detail/CafeReview";
// =======
import CafeInfo from "../../components/detail/CafeInfo/index";
import CafeReview from "../../components/detail/CafeReview/index";
// >>>>>>> a9cbb805d04109a082ef8298491f90e0a15018e4
const Detail = () => {
    return (
        <div>
            <CafeInfo />
            <CafeReview />
        </div>);
}

export default Detail;