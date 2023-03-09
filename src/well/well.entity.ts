import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'Well'})
export class WellEntity{
    @PrimaryGeneratedColumn()
    Id: number

    @Column({type: 'text'})
    Name: string

    @CreateDateColumn({ type: "timestamp"})
    Created_at: Date;

    @UpdateDateColumn({ type: "timestamp", onUpdate: "CURRENT_TIMESTAMP(6)" })
    Updated_at: Date;

}