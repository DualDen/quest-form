import { Form } from 'antd';
import React, {FC} from 'react';

const DynamicDetails:FC = () => {
    return (
        <Form.List name="details">
            {(fields, { add, remove }) => (
                <>
                    <Form.Item>

                    </Form.Item>
                    {fields.map((field,index) => {

                    })}
                </>
            )}
        </Form.List>
    );
};

export default DynamicDetails;