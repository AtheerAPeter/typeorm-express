import { getRepository } from "typeorm";
import { Author } from "./src/entity/User";
import { Article } from "./src/entity/Article";
import { async } from "validate.js";

export const Foo = async () => {
  const authorRepo = getRepository(Author);
  const author = authorRepo.create({
    name: "FikraSpace",
  });

  await authorRepo.save(author).catch((err) => {
    console.log("error", err);
  });
  console.log("saved", author);

  const articleRepo = getRepository(Article);
  const article = new Article();
  article.author = author;
  article.title = "Generate Lorem Ipsum placeholder text.";
  article.text =
    '<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>';
  article.image = "https://picsum.photos/600/300?grayscale";
  article.createdAt = "2020-09-24T22:34:00.976Z";
  article.updatedAt = "2020-09-24T22:34:00.976Z";

  articleRepo
    .save(article)
    .catch((err) => console.log("error saving article", err));
};

export const find = async () => {
  const articlesRepo = getRepository(Article);
  const articles = await articlesRepo.find().catch((err) => console.log(err));
  console.log("articles are:", articles);
};
