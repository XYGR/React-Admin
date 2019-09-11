import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

class ProductEdit extends Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="产品" second="产品管理" />
                ProductEdit
            </div>
        );
    }
}

export default ProductEdit;