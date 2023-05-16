import React from 'react';
import Collection from "./../../components/components/Collections/Collection";
import Composition from "./../../components/Compositions/Composition";

export default function Page({ params }) {
    return (
        <div>
            {params.slug[1] ? <Composition params = {params}/> : <Collection params = {params}/>}
        </div>
    )
}