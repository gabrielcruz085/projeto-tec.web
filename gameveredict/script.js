const jogos = [
  {
    id: 1,
    titulo: "The Witcher 3: Wild Hunt",
    nota: "10/10",
    imagem: "./capas/Witcher3.png",
    dificuldadeJogo: "Média",
    tempoJogado: "354 horas",
    conquistasObtidas: "78 / 78 (100%)",
    resenha: "Simplesmente impecável. A riqueza de detalhes do mundo, a profundidade das missões secundárias e o carisma de Geralt tornam este o melhor RPG já feito. Uma experiência obrigatória para qualquer fã de videogames.",
    graficos: "Incríveis! Mesmo sendo um jogo de 2015, até hoje é difícil encontrar um título tão completo, detalhado e envolvente.",
    combate: "Incríveis e dinâmicos! Oferece uma enorme variedade de recursos para usar em batalha, como os Sinais de Bruxo, óleos para lâminas, elixires, bombas e esquivas precisas.",
    dublagem: "Excelente localização para o português brasileiro, com pouquíssimas falhas. Traz diálogos muito naturais, humor afiado, piadas marcantes e vocabulário adulto (+18) que trazem extrema imersão.",
    pros: [
      "Excelente otimização, rodando bem em diversas configurações de hardware",
      "Combates épicos e sistemas enriquecidos de preparação e alquimia",
      "Narrativa impecável e personagens extremamente marcantes",
      "Mundo aberto vasto, vivo e fascinante de explorar",
      "Possui duas das melhores DLCs da história dos videogames (Hearts of Stone e Blood and Wine)"
    ],
    contras: [
      "Classificação indicativa estrita (+18) devido a cenas adultas, violência explícita e linguagem forte",
      "Pequenas oscilações físicas ou de colisão pontuais comuns em mundos abertos vastos"
    ],
    desempenho: "Rodou na qualidade Alto a cerca de 50 FPS em 1080p, com quedas repentinas ocasionais em cidades densas (como Novigrad) devido ao imenso tamanho do mapa e quantidade de NPCs.",
    variaveisBusca: ["tw3", "witcher", "witcher 3", "tw3wh", "geralt"],
    platina: {
      horasPlatina: "150 a 200 horas",
      dificuldadePlatina: "Média/Alta (8/10)",
      conquistasPlatina: "78 / 78 (100%)",
      resenhaPlatina: "Que jogo incrível! Facilmente um dos melhores jogos que já joguei e continua sendo meu jogo favorito. A jornada rumo ao 100% exige finalizar a campanha na dificuldade Marcha da Morte, completar todos os contratos de bruxo, explorar o mapa a fundo e vencer os torneios de Gwent. Uma experiência marcante e altamente gratificante."
    }
  },
  {
    id: 2,
    titulo: "Elden Ring",
    nota: "9.5/10",
    imagem: "./capas/Elden.jpg",
    dificuldadeJogo: "Alta",
    tempoJogado: "120 horas",
    conquistasObtidas: "25 / 42 (59%)",
    resenha: "Uma obra-prima do gênero Soulslike. A transição para o mundo aberto foi feita de forma genial, oferecendo sensação de descoberta constante e batalhas marcantes contra chefes colossais.",
    graficos: "Direção de arte espetacular com cenários marcantes e marcante otimização visual.",
    combate: "Combate preciso, desafiador e com grande variedade de mecânicas, magias e armas.",
    dublagem: "Atuação de voz impecável em inglês com trilha sonora marcante nas batalhas.",
    pros: [
      "Mundo aberto rico em exploração e segredos",
      "Combates marcantes e chefes desafiadores",
      "Liberdade total para criação de builds"
    ],
    contras: [
      "Leves quedas de quadros em áreas abertas específicas com muitos efeitos visuais"
    ],
    desempenho: "Rodou entre 50 a 60 FPS na qualidade Média/Alta em 1080p, com excelente estabilidade.",
    variaveisBusca: ["er", "elden", "elden ring", "ring"]
  },
  {
    id: 3,
    titulo: "God of War (2018)",
    nota: "10/10",
    imagem: "./capas/god2018.jpg",
    dificuldadeJogo: "Média",
    tempoJogado: "147 horas",
    conquistasObtidas: "37 / 37 (100%)",
    resenha: "Uma reinvenção perfeita da franquia. O combate visceral com o machado Leviathan somado à jornada emocionante entre Kratos e Atreus criam um dos jogos mais marcantes da geração.",
    graficos: "Incríveis! A ambientação na mitologia nórdica é rica em detalhes, com cenários deslumbrantes e direção de arte espetacular.",
    combate: "Incríveis e extremamente satisfatórios! O Leviathan Axe tem uma física perfeita ao ser arremessado e chamado de volta, criando confrontos viscerais.",
    dublagem: "Dublagem impecável em português brasileiro, com atuação marcante e imersiva para o Kratos e o Atreus.",
    pros: [
      "Reinvenção fantástica da franquia com perspectiva em câmera contínua",
      "Desenvolvimento de personagem e relação pai e filho brilhante",
      "Combate altamente responsivo e prazeroso",
      "Chefes e desafios opcionais marcantes"
    ],
    contras: [
      "Pouca variação nos modelos de Trolls e chefes secundários"
    ],
    desempenho: "Rodou nas configurações entre Médio e Alto mantendo uma taxa de 40 a 50 FPS muito estável.",
    variaveisBusca: ["gow", "gow 2018", "god of war 2018", "god 2018", "gow4"],
    platina: {
      horasPlatina: "147 horas",
      dificuldadePlatina: "Média (6/10)",
      conquistasPlatina: "37 / 37 (100%)",
      resenhaPlatina: "Platina sensacional de conquistar! A jornada exige fechar todas as fendas do reino, encontrar os colecionáveis e derrotar os desafios mais difíceis. Mas confesso: sofri demais contra a Rainha Valquíria Sigrun kkkkk! Vitória suada, inesquecível e extremamente gratificante."
    }
  },
  {
    id: 4,
    titulo: "God of War Ragnarök",
    nota: "10/10",
    imagem: "./capas/rag.jpg",
    dificuldadeJogo: "Média",
    tempoJogado: "80 horas",
    conquistasObtidas: "28 / 36 (77%)",
    resenha: "Um espetáculo do começo ao fim. Consegue expandir tudo o que o anterior fez de bom, trazendo mais escala, batalhas épicas nos nove reinos e um desfecho emocionante para a saga nórdica.",
    graficos: "Incríveis! Conseguiu superar o jogo de 2018 em escala, variedade dos nove reinos e nível de detalhes visuais.",
    combate: "Incrível e ainda superior ao anterior! A adição de novas mecânicas, armas e maior mobilidade deixaram as batalhas ainda mais fluidas e variadas.",
    dublagem: "Excelente localização para o português, mantendo a dramaticidade e qualidade máxima no ápice da saga nórdica.",
    pros: [
      "Superou o anterior em combate, narrativa e espetáculo visual",
      "Variedade imensa de inimigos e combates marcantes",
      "Conclusão emocionante e épica para a jornada"
    ],
    contras: [
      "Exigência elevada de hardware, sendo bem pesado para placas com pouca VRAM"
    ],
    desempenho: "Rodou nas configurações no Mínimo mantendo cerca de 40 a 50 FPS. É um jogo bem pesado para quem exige apenas 8GB de RAM, mas chega a pedir cerca de 6GB de VRAM da placa para rodar com estabilidade.",
    variaveisBusca: ["gowr", "gow ragnarok", "ragnarok", "god of war ragnarok", "rag"]
  },
  {
    id: 5,
    titulo: "The Last of Us Part I",
    nota: "9/10",
    imagem: "./capas/tl1.jpg",
    dificuldadeJogo: "Média",
    tempoJogado: "55 horas",
    conquistasObtidas: "29 / 29 (100%)",
    resenha: "A versão definitiva de uma das maiores narrativas dos games. O ritmo da história, a tensão na exploração e a relação de Joel e Ellie continuam emocionando como na primeira vez.",
    graficos: "Excelentes! O remake entregou uma reconstrução visual impressionante com iluminação realista e modelos de personagens muito detalhados.",
    combate: "Incrível! A mistura de stealth, escassez de recursos e tiroteios tensos cria uma atmosfera de sobrevivência constante.",
    dublagem: "Dublagem em português clássica e impecável, transmitindo toda a emoção e peso dramático da história de Joel e Ellie.",
    pros: [
      "História emocionante que continua sendo uma das melhores produções dos videogames",
      "Visual totalmente reformulado em motor gráfico moderno",
      "Atmosfera de sobrevivência altamente imersiva"
    ],
    contras: [
      "Otimização exigente no PC, cobrando bastante do hardware"
    ],
    desempenho: "Rodou nas configurações no Mínimo cravando uma taxa fluida entre 40 a 50 FPS.",
    variaveisBusca: ["tlou", "tlou 1", "tl1", "tlou part 1", "the last of us 1"],
    platina: {
      horasPlatina: "55 horas",
      dificuldadePlatina: "Média (5/10)",
      conquistasPlatina: "29 / 29 (100%)",
      resenhaPlatina: "Platina muito bacana de buscar! Exige coletar todos os artefatos, manuais, pingentes e ouvir todas as conversas opcionais. É uma jornada bem tranquila de fazer e que faz você aproveitar cada detalhe desse clássico."
    }
  },
  {
    id: 6,
    titulo: "The Last of Us Part II",
    nota: "9.5/10",
    imagem: "./capas/tl2.jpg",
    dificuldadeJogo: "Média",
    tempoJogado: "35 horas",
    conquistasObtidas: "22 / 41 (53%)",
    resenha: "Acabei gostando um pouco mais do 2 do que do 1, principalmente pela evolução absurda na gameplay, combate e por mostrar a perspectiva e o lado de cada personagem na história.",
    graficos: "Excelentes! As animações corporais, expressões faciais e ambientação pós-apocalíptica estão no patamar mais alto da indústria.",
    combate: "Incrível e refinado! A adição da esquiva, capacidade de se deitar e esconder na grama alta elevaram a gameplay a outro nível de tensão.",
    dublagem: "Atuação de voz e dublagem em português excepcionais, mantendo o realismo e a carga dramática de cada cena.",
    pros: [
      "Gameplay e física de combate ainda mais fluidas e viscerais do que no primeiro",
      "Evolução absurda na movimentação e no design dos cenários",
      "Narrativa profunda e corajosa que explora diferentes perspectivas"
    ],
    contras: [
      "Exige hardware atualizado e ajustes manuais nas opções visuais para manter boa performance"
    ],
    desempenho: "Rodou nas configurações no Mínimo entre 40 a 50 FPS.",
    variaveisBusca: ["tlou 2", "tl2", "tlou part 2", "the last of us 2"]
  },
  {
    id: 7,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm 2",
    nota: "7.5/10",
    imagem: "./capas/st2.jpg",
    dificuldadeJogo: "Fácil",
    tempoJogado: "13 horas",
    conquistasObtidas: "18 / 50 (36%)",
    resenha: "Uma ótima nostalgia para os fãs do anime, adaptando o arco do Pain com fidelidade. Apesar do combate ser mais simples em relação aos posteriores, continua muito divertido.",
    graficos: "Bons! A arte em cel-shading recria fielmente o estilo do anime e envelheceu super bem.",
    combate: "Legal! É divertido, porém as mecânicas de jogo e combate ainda não são tão fluidas quanto nos títulos posteriores da franquia.",
    dublagem: "Vozes originais marcantes em japonês e inglês com ótima interpretação dos personagens do anime.",
    pros: [
      "Extremamente leve e bem otimizado, roda em praticamente qualquer PC",
      "Adaptação fiel de um dos melhores arcos do anime (saga do Pain)",
      "Visual em cel-shading muito bonito e nostálgico"
    ],
    contras: [
      "Mecânicas de combate e movimentação mais limitadas se comparadas às sequências"
    ],
    desempenho: "Rodou perfeitamente suave e cravado a 60 FPS no Alto/Máximo. Jogo extremamente leve que roda em praticamente qualquer PC.",
    variaveisBusca: ["storm 2", "storm2", "naruto 2", "naruto storm 2", "nsuns2"]
  },
  {
    id: 8,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm 3 Full Burst",
    nota: "8.5/10",
    imagem: "./capas/st33.jpg",
    dificuldadeJogo: "Fácil",
    tempoJogado: "28 horas",
    conquistasObtidas: "55 / 55 (100%)",
    resenha: "Uma evolução gigante em relação ao 2. O combate ficou muito mais dinâmico e as lutas cinematográficas de chefes durante a Quarta Guerra Ninja são um espetáculo à parte.",
    graficos: "Bons e expressivos! O estilo cel-shading continua lindo e se destaca bastante nas lutas cinematográficas de chefes.",
    combate: "Muito bom! Corrigiram e melhoraram muito as mecânicas de combate do 2 para o 3, trazendo lutas mais dinâmicas e fluidas.",
    dublagem: "Excelente dublagem em japonês e inglês com toda a emoção e peso dos momentos decisivos da Quarta Guerra Ninja.",
    pros: [
      "Grande evolução nas mecânicas e no ritmo de combate em relação ao Storm 2",
      "Batalhas de chefes espetaculares e cinematográficas",
      "Extremamente leve e otimizado para rodar em qualquer PC",
      "Platina tranquila e divertida de conquistar"
    ],
    contras: [
      "Algumas transições e diálogos longos no modo história"
    ],
    desempenho: "Rodou cravado a 60 FPS nas configurações máximas. Mantém o padrão da franquia de ser super leve.",
    variaveisBusca: ["storm 3", "storm3", "naruto 3", "naruto storm 3", "nsuns3", "full burst"],
    platina: {
      horasPlatina: "28 horas",
      dificuldadePlatina: "Fácil (3/10)",
      conquistasPlatina: "55 / 55 (100%)",
      resenhaPlatina: "Platina bem simples e bacana! Exige completar o modo história obtendo rank S nas lutas principais e cumprir os desafios das Decisões Supremas. Foi uma evolução gigante comparado ao Storm 2!"
    }
  },
  {
    id: 9,
    titulo: "Naruto Shippuden: Ultimate Ninja Storm 4",
    nota: "9.5/10",
    imagem: "./capas/st44.jpg",
    dificuldadeJogo: "Média / Fácil",
    tempoJogado: "60 horas",
    conquistasObtidas: "50 / 50 (100%)",
    resenha: "O ápice dos jogos de luta de anime. Com a troca livre de personagens em batalha e gráficos espetaculares, é disparado o título mais completo e divertido de toda a franquia.",
    graficos: "Incríveis! Os efeitos de jutsus, quebra de cenários e animações dos deuses tornam este o jogo mais lindo da franquia.",
    combate: "Ótimo e definitivo! A mecânica de trocar de personagem durante os combos e o ritmo acelerado deixaram a gameplay sensacional.",
    dublagem: "Ótima! Conta inclusive com dublagem oficial em português brasileiro com os dubladores clássicos do anime.",
    pros: [
      "Combate impecável, mecânicas perfeitas e um roster enorme de personagens",
      "Excelente para jogar localmente com amigos",
      "Nostalgia pura com a dublagem em PT-BR",
      "Extremamente leve, rodando liso em praticamente qualquer PC"
    ],
    contras: [
      "O modo online é antigo e tem poucos jogadores ativos; os poucos que restaram são extremamente experientes/viciados",
      "Dificuldade das missões oscila entre fácil e média dependendo do objetivo"
    ],
    desempenho: "Rodou super fluido a 60 FPS cravados nas configurações mais altas. Mesmo com gráficos incríveis, continua rodando em qualquer PC.",
    variaveisBusca: ["storm 4", "storm4", "naruto 4", "naruto storm 4", "nsuns4"],
    platina: {
      horasPlatina: "40 horas",
      dificuldadePlatina: "Média / Fácil (4/10)",
      conquistasPlatina: "50 / 50 (100%)",
      resenhaPlatina: "Platina fantástica! Leva em torno de 40 horas e exige obter Rank S nas missões do modo história e vencer os torneios/desafios secundários. A dificuldade varia dependendo da missão, mas com a mecânica de troca de personagem fica bem acessível!"
    }
  }
];

const containerJogos = document.getElementById("lista-de-jogos");
const containerPlatinas = document.getElementById("lista-de-platinas");
const inputBusca = document.getElementById("campo-busca");
const contadorJogos = document.getElementById("total-jogos");
const contadorPlatinas = document.getElementById("total-platinas");

if (inputBusca) {
  const avisoBusca = document.createElement("div");
  avisoBusca.className = "aviso-biblioteca-atualizacao";
  avisoBusca.innerHTML = `
    <div style="margin-bottom: 12px; padding: 10px 16px; background: rgba(255, 193, 7, 0.12); border-left: 4px solid #ffc107; border-radius: 6px; font-size: 0.92rem; color: #f0f0f0; display: flex; align-items: center; gap: 8px;">
      <span>🔔 <strong>Aviso:</strong> Novos jogos, análises e platinas são adicionados frequentemente a esta biblioteca!</span>
    </div>
  `;
  inputBusca.parentNode.insertBefore(avisoBusca, inputBusca);
}

const modalHTML = `
  <div id="image-modal" class="image-modal">
    <span class="modal-close" onclick="fecharImagemModal()">&times;</span>
    <img id="modal-img" src="" alt="Capa Expandida">
  </div>
`;
document.body.insertAdjacentHTML("beforeend", modalHTML);

function calcularDistancia(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function buscarSugestao(termo) {
  const termoClean = termo.toLowerCase().trim();
  if (!termoClean) return null;

  let melhorJogo = null;
  let menorDistancia = Infinity;

  jogos.forEach(jogo => {
    const termosParaTestar = [
      jogo.titulo.toLowerCase(),
      ...(jogo.variaveisBusca || []).map(v => v.toLowerCase())
    ];

    termosParaTestar.forEach(tituloClean => {
      const distCompleta = calcularDistancia(termoClean, tituloClean);
      if (distCompleta < menorDistancia && distCompleta <= 4) {
        menorDistancia = distCompleta;
        melhorJogo = jogo.titulo;
      }

      const palavrasTitulo = tituloClean.split(/[\s:-]+/);
      const palavrasTermo = termoClean.split(/\s+/);

      palavrasTermo.forEach(pTermo => {
        palavrasTitulo.forEach(pTitulo => {
          if (pTitulo.length >= 3 && pTermo.length >= 2) {
            const dist = calcularDistancia(pTermo, pTitulo);
            const limiteTolerado = Math.max(1, Math.floor(pTitulo.length / 3));

            if (dist <= limiteTolerado && dist < menorDistancia) {
              menorDistancia = dist;
              melhorJogo = jogo.titulo;
            }
          }
        });
      });
    });
  });

  return melhorJogo;
}

function renderizarPlatinas() {
  if (!containerPlatinas) return;
  containerPlatinas.innerHTML = "";

  const platinados = jogos.filter(j => j.platina);

  if (contadorPlatinas) {
    contadorPlatinas.textContent = `${platinados.length} Platina(s)`;
  }

  platinados.forEach(jogo => {
    const card = document.createElement("article");
    card.className = "platinum-card";

    card.innerHTML = `
      <span class="platinum-badge-tag">🏆 100% CONCLUÍDO</span>
      <div class="platinum-cover">
        <img 
          src="${jogo.imagem}" 
          alt="Capa de ${jogo.titulo}" 
          title="Clique para expandir"
          onclick="abrirImagemModal('${jogo.imagem}', '${jogo.titulo}')"
          onerror="this.src='https://via.placeholder.com/220x300?text=Sem+Imagem'"
        >
      </div>
      <div class="platinum-info">
        <h3>${jogo.titulo}</h3>
        <div class="platinum-stats-grid">
          <div class="stat-box">
            <strong>⏱️ Tempo p/ Platina</strong>
            ${jogo.platina.horasPlatina}
          </div>
          <div class="stat-box">
            <strong>🎯 Dificuldade Platina</strong>
            ${jogo.platina.dificuldadePlatina}
          </div>
          <div class="stat-box">
            <strong>🏆 Conquistas / Troféus</strong>
            ${jogo.platina.conquistasPlatina}
          </div>
        </div>
        <div class="platinum-review">
          📝 <strong>Jornada da Platina:</strong> ${jogo.platina.resenhaPlatina}
        </div>
        <button class="btn-see-analysis" onclick="irParaAnalise(${jogo.id})">
          🔍 Quer saber mais? Ver análise completa do jogo
        </button>
      </div>
    `;

    containerPlatinas.appendChild(card);
  });
}

function renderizarJogos(lista, termoBusca = "") {
  containerJogos.innerHTML = "";

  if (lista.length === 0) {
    const sugestao = termoBusca ? buscarSugestao(termoBusca) : null;
    
    let mensagem = `<div class="sem-resultados">
      <p>⚠️ Nenhum jogo encontrado para "<strong>${termoBusca}</strong>".</p>`;
    
    if (sugestao) {
      mensagem += `<p class="sugestao-texto">Você quis dizer <span class="sugestao-link" onclick="aplicarSugestao('${sugestao}')">${sugestao}</span>?</p>`;
    }

    mensagem += `</div>`;
    containerJogos.innerHTML = mensagem;
    return;
  }

  lista.forEach(jogo => {
    const prosHTML = jogo.pros.map(pro => `<li>${pro}</li>`).join("");
    const contrasHTML = jogo.contras.map(contra => `<li>${contra}</li>`).join("");

    const card = document.createElement("article");
    card.className = "review-card";
    card.id = `jogo-card-${jogo.id}`;

    card.innerHTML = `
      <div class="card-cover">
        <img 
          src="${jogo.imagem}" 
          alt="Capa do jogo ${jogo.titulo}" 
          title="Clique para expandir a imagem"
          onclick="abrirImagemModal('${jogo.imagem}', '${jogo.titulo}')"
          onerror="this.src='https://via.placeholder.com/220x300?text=Sem+Imagem'"
        >
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3>${jogo.titulo}</h3>
          <span class="badge">Nota: ${jogo.nota}</span>
        </div>
        
        <div class="review-stats-bar">
          <div class="review-stat-item">⚔️ <strong>Dificuldade:</strong> ${jogo.dificuldadeJogo || 'N/A'}</div>
          <div class="review-stat-item">⏱️ <strong>Tempo Jogado:</strong> ${jogo.tempoJogado || 'N/A'}</div>
          <div class="review-stat-item">🏆 <strong>Conquistas:</strong> ${jogo.conquistasObtidas || 'N/A'}</div>
        </div>

        <div class="criterion">
          <h4>🎨 Gráficos & Direção de Arte</h4>
          <p>${jogo.graficos}</p>
        </div>
        <div class="criterion">
          <h4>⚔️ Combates & Gameplay</h4>
          <p>${jogo.combate}</p>
        </div>
        <div class="criterion">
          <h4>🎙️ Dublagem & Sonoplastia</h4>
          <p>${jogo.dublagem}</p>
        </div>
        <div class="criterion">
          <h4>💬 Opinião / Resenha</h4>
          <p>${jogo.resenha}</p>
        </div>
        <div class="pros-cons">
          <div class="pros">
            <h5>✅ Pontos Positivos</h5>
            <ul>${prosHTML}</ul>
          </div>
          <div class="cons">
            <h5>❌ Pontos Negativos</h5>
            <ul>${contrasHTML}</ul>
          </div>
        </div>
        <div class="performance-report">
          📊 <strong>Desempenho no Setup:</strong> ${jogo.desempenho}
        </div>
      </div>
    `;

    containerJogos.appendChild(card);
  });

  if (contadorJogos) {
    contadorJogos.textContent = `${lista.length} jogo(s) analisado(s)`;
  }
}

window.irParaAnalise = function(idJogo) {
  const elementoCard = document.getElementById(`jogo-card-${idJogo}`);
  if (elementoCard) {
    elementoCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    elementoCard.classList.add("highlight-card");
    setTimeout(() => {
      elementoCard.classList.remove("highlight-card");
    }, 2000);
  }
};

window.abrirImagemModal = function(src, alt) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modalImg.alt = alt;
  modal.classList.add("active");
};

window.fecharImagemModal = function() {
  const modal = document.getElementById("image-modal");
  modal.classList.remove("active");
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("image-modal");
  if (e.target === modal) fecharImagemModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharImagemModal();
});

window.aplicarSugestao = function(nomeJogo) {
  inputBusca.value = nomeJogo;
  inputBusca.dispatchEvent(new Event('input'));
};

inputBusca.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase().trim();
  
  if (termo === "") {
    renderizarJogos(jogos);
    return;
  }

  const jogosFiltrados = jogos.filter(jogo => {
    const tituloCorresponde = jogo.titulo.toLowerCase().includes(termo);
    const variavelCorresponde = jogo.variaveisBusca && jogo.variaveisBusca.some(v => v.toLowerCase().includes(termo));
    return tituloCorresponde || variavelCorresponde;
  });

  renderizarJogos(jogosFiltrados, termo);
});

renderizarPlatinas();
renderizarJogos(jogos);