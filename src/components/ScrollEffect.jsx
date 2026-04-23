import React from "react";
import { motion, useScroll } from "motion/react";

const ScrollEffect = () => {
    const {scrollYProgress} = useScroll();


  return (
    <div className="bg-black text-white h-full flex justify-center p-10">
      <div className="flex flex-col gap-8 items-center w-[80vw]">
        <h1 className="text-6xl">Learn Framer Motion 🚀</h1>

        <motion.div style={{
            scaleX: scrollYProgress
        }} className="bg-red-600 origin-left w-full h-2 fixed top-0"></motion.div>

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit
          aliquam earum veritatis voluptatum pariatur dicta, consequatur
          reprehenderit facilis cumque repudiandae vel delectus rerum totam,
          corrupti tenetur. Ab, quo fugit qui in natus, ratione veniam suscipit
          inventore architecto maiores, necessitatibus numquam consequatur autem
          deserunt. Natus fugit quas vitae doloremque rerum impedit sint velit
          obcaecati expedita labore possimus a non, nam sapiente culpa? Corporis
          suscipit impedit, sunt rem minus soluta dicta at itaque saepe eos
          fugit repellendus maxime cupiditate dolore quo nihil quibusdam facilis
          voluptates! Itaque repellat sit asperiores ducimus amet, optio
          blanditiis nulla, maxime saepe facere quia. Impedit fugit iste magni
          commodi alias nisi consectetur laudantium possimus? Quod, perferendis.
          Pariatur non, tenetur dolore tempore laboriosam sapiente laudantium
          recusandae fugit atque placeat doloribus vero quibusdam commodi iste
          fuga quo animi iusto a sunt veniam architecto porro? Omnis dolores
          corporis repellendus praesentium, non ab animi vel tempora laudantium
          cupiditate, hic minus quas expedita. Minus dolores incidunt vitae odio
          voluptates saepe consequatur distinctio labore in ex obcaecati tempora
          corrupti ut quae cupiditate similique, dolorem magni totam! Voluptas
          culpa vero in beatae iusto recusandae! Accusantium, nihil architecto
          laborum sapiente repellendus quae dolorum. Totam nemo corporis
          repudiandae ipsa minima animi necessitatibus cum iste repellendus
          nostrum!
        </p>
      </div>
    </div>
  );
};

export default ScrollEffect;
