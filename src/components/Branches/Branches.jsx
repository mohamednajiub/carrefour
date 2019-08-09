import React from 'react';
import * as classes from './Branches.module.scss';
import {Branches} from '../../Data';
import Branch from './Branch/Branch';
import Titles from '../UI/Titles/Titles'
const branches = () =>{
    return (
        <div className={classes.BranchesContainer}>
            <div className="container">
                <Titles className={classes.Title} title='browse by branch' subtitle="choose the branch closest to you" />
                <div className={classes.Branches}>
                    {Branches.map((branch, index)=>{
                        return <Branch key={index} link={branch.link} place={branch.place} source={branch.source}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default branches;
