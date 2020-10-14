import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Author } from "./User";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Author, (author) => author.articles)
  author: Author;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  image: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
