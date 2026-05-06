import React from 'react';

const ServiceDetailsPage =  async({params}) => {
    const {slug} = await params;
    console.log(slug)
    return (
        <div>
            <h1>this is service details page{slug}</h1>
        </div>
    );
};

export default ServiceDetailsPage;