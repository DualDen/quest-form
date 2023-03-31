import React, {FC} from 'react';
import {ConfigProvider} from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

interface IAntdConfigProps {
    children: React.ReactNode,
}

const AntdConfig:FC<IAntdConfigProps> = ({children}) => {
    const mainColor = 'rgba(255, 107, 47, 1)';
    const colors = {
        colorPrimary: mainColor,
        colorPrimaryHover: mainColor,
    }
    return (
        <ConfigProvider locale={ru_RU} theme={{
            token: {
              fontFamily: "Montserrat"
            },
            components: {
                Radio: colors,
                Checkbox: colors,
                Tabs: colors,
                Button: colors,
                Input: colors,
                DatePicker: colors,
            },
        }}>
            {children}
        </ConfigProvider>
    );
};

export default AntdConfig;