import { AbstractPartionable } from "./AbstractPartionable";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Partition } from "./Partition";

@Entity()
export class AutoRole extends AbstractPartionable
{
    @PrimaryGeneratedColumn()
    public readonly id!: number;
    
    @Column()
    public roleID!: string;

    constructor(roleID: string, partition: Partition)
    {
        super(partition);
        this.roleID = roleID;
    }
}