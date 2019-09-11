import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

class BannerEdit extends Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="Banner" second="Banner管理" />
                BannerEdit
            </div>
        );
    }
}

export default BannerEdit;