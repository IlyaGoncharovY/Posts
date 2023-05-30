import React, {FC} from 'react';
import {DataSetType} from "../../../common/data/DataSet";
import {Icon} from "@iconify/react";

interface SkillItemType {
    skill: DataSetType
}

export const SkillItem: FC<SkillItemType> = ({skill}) => {
    return (
        <div>
            <Icon icon={skill.iconValue} fontSize={"40px"}/>
            <b>
                {skill.title}
            </b>
        </div>
    );
};