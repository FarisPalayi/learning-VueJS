const { data, methods } = {
  data() {
    return {};
  },
  methods: {},
};

const FullArticle = {
  data,
  methods,
  template: `
    <div class="bl-article-container">
      <article class="bl-article">
        <!-- <top-section>This is the Blog Heading</top-section> -->
        <h1 class="bl-article-title bl-h1">This is the Blog Heading</h1>
        <p class="bl-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis, 
          ducimus eum maxime fugiat asperiores et laudantium delectus, consectetur consequuntur
          iste quo velit distinctio molestiae necessitatibus expedita cupiditate. Voluptate 
          odio nulla exercitationem architecto. Iure, aut numquam. Soluta accusamus dignissimos 
          rem illo delectus molestias commodi quo illum non, hic repellat ex cupiditate beatae 
          nesciunt aliquid. Odio voluptas alias, animi debitis sit dolorum nesciunt quis placeat.
        </p>
        <p class="bl-p">
            Molestiae autem explicabo similique distinctio eveniet ipsam eligendi ea! Harum aperiam, 
          delectus quos eos quia atque aliquam exercitationem mollitia accusamus, nobis reprehenderit, 
          cupiditate assumenda odio perferendis dolorum repellendus cumque beatae labore quam repellat 
          natus placeat ex veritatis odit! Quod dolores perspiciatis ex dignissimos esse adipisci! Harum 
          commodi voluptas sequi? Rerum, aliquam minus fuga vitae officia eius voluptatum deserunt nisi 
          magnam cum quia. Suscipit necessitatibus aperiam numquam sapiente modi iusto a et animi deserunt 
          doloribus, expedita odit excepturi? Obcaecati, dolores laborum veritatis omnis nam aliquid. 
        </p>
        <p class="bl-p">
            Pariatur iusto labore quo asperiores quod recusandae totam deleniti itaque consectetur ad, odit 
          ipsum exercitationem nesciunt quia quas libero, reprehenderit veritatis provident hic praesentium 
          eum similique atque sit! Ex asperiores in error veniam enim quasi exercitationem, dolores dolorem 
          odio consequatur ipsa dignissimos earum. Ea voluptatum dolore itaque distinctio unde a cum, esse 
          asperiores! Maiores at facere quisquam aspernatur reiciendis commodi cupiditate.
        </p>
        <p class="bl-p">
            Facere, sequi explicao. Voluptas tenetur praesentium, animi provident velit ex beatae debitis esse cum exercitationem 
          numquam placeat consequatur quasi asperiores voluptatum mollitia architecto sit est doloribus officiis non 
          quisquam at facilis harum. Enim iste aliquid vel officia ipsa minima esse error pariatur magnam libero adipisci 
          dolorum eveniet, repellendus beatae rerum veritatis. 
        </p>
        <p class="bl-p">
            Natus ad temporibus dignissimos aliquam dolor blanditiis rem fuga? Sunt minus repellat cupiditate, aperiam tenetur ex delectus quasi eius vitae eveniet 
          similique nihil rerum dolor maiores? Alias perferendis repellendus quisquam dolore illum id 
          necessitatibus eos explicabo, dolores saepe, optio fugiat! Id debitis dicta nesciunt minimal. 
        </p>
    </div>
    </article>
  `,
};

export default Vue.component("full-article", FullArticle);
