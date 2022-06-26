INSERT INTO
    clientes (nome, email, senha, telefone, endereco)
VALUES
    (
        'Giovana Betina Barbosa',
        'giovanabetinabarbosa@gmail.com',
        'ZjRxDsNQt4',
        '27998835914',
        'Rua Tancredo Neves 639, Serra-ES'
    );

INSERT INTO
    clientes (nome, email, senha, telefone, endereco)
VALUES
    (
        'Gael Geraldo da Conceição',
        'ggconceicao@gmail.com',
        'MRalkmBOJq',
        '69994235684',
        'Rua Modigliani 148, Porto Velho-RO'
    );

INSERT INTO
    clientes (nome, email, senha, telefone, endereco)
VALUES
    (
        'Francisca Isabel Vieira',
        'franvieira@gmail.com',
        'kW1bnjci70',
        '85827093319',
        'Rua Dom Henrique 182, São Luís-MA'
    );

INSERT INTO
    clientes (nome, email, senha, telefone, endereco)
VALUES
    (
        'Sarah Carolina da Conceição',
        'ssarahcarolinadaconceicao@gmail.com',
        '54bOsJjloe',
        '71387384988',
        'Rua Poeta Evaristo de Souza 460, Natal-RN'
    );

INSERT INTO
    clientes (nome, email, senha, telefone, endereco)
VALUES
    (
        'Vitor Martin Pinto',
        'vvitormartinpinto@gmail.com',
        'GGh0SmQ5Wo',
        '13720467392',
        'Rua Quarenta e Nove 356, São Luís-MA'
    );

INSERT INTO
    autores (nome, email, telefone)
VALUES
    (
        'Carolina Milena Almada',
        'ccarolinamilenaalmada@gmail.com',
        '83996565550'
    );

INSERT INTO
    autores (nome, email, telefone)
VALUES
    (
        'Yago Raul da Rocha',
        'yyagorauldarocha@gmail.com',
        '63987932013'
    );

INSERT INTO
    autores (nome, email, telefone)
VALUES
    (
        'César Lucca Alves',
        'cesarluccaalv@gmail.com',
        '63998823896'
    );

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('APIs em Node.js', 90, 25, 1);

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('JavaScript Moderno', 60, 5, 1);

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('Express na Prática', 45, 35, 1);

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('Bancos de Dados Relacionais', 130, 15, 2);

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('Bancos de Dados NoSQL', 110, 2, 3);

INSERT INTO
    livros (nome, valor, estoque, autor_id)
VALUES
    ('Autenticação e Autorização em APIs', 70, 60, 3);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (90, '2000-08-10', 1, 1);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (60, '2000-10-20', 1, 2);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (130, '2000-10-12', 1, 4);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (60, '2000-01-6', 2, 2);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (45, '2000-03-2', 2, 3);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (110, '2000-04-9', 2, 5);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (90, '2000-02-11', 3, 1);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (60, '2000-04-15', 3, 2);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (45, '2000-05-14', 3, 3);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (130, '2000-06-12', 3, 4);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (110, '2000-09-19', 3, 5);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (70, '2000-12-20', 3, 6);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (110, '2000-11-2', 4, 5);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (70, '2000-11-9', 4, 6);

INSERT INTO
    vendas (valor, data, cliente_id, livro_id)
VALUES
    (45, '2000-12-14', 5, 3);

UPDATE
    livros
SET
    livroinfo = '{
    "descricao": "O livro trata a respeito de criação de APIs com Node.js, levando ao leitor os principais conceitos necessários para a implementação",
    "paginas": 250,
    "editora": "Editora IGTI",
    "avaliacoes": []
}'
WHERE
    livro_id = 1;

UPDATE
    livros
SET
    livroinfo = '{
"descricao": "O livro passa uma visão geral sobre o JavaScript moderno, quais as principais estruturas e exemplos de utilização",
    "paginas": 350,
    "editora": "Editora IGTI",
    "avaliacoes": []
}'
WHERE
    livro_id = 2;

UPDATE
    livros
SET
    livroinfo = '{
   "descricao": "O livro demonstra na prática a utilização do Express em conjunto com o Node.js para criação de APIs",
    "paginas": 150,
    "editora": "Editora IGTI",    
    "avaliacoes": [
    ] 
}'
WHERE
    livro_id = 3;

UPDATE
    livros
SET
    livroinfo = '{
"descricao": "O livro aborda na teoria e na prática os bancos de dados relacionais, desde a sua motivação até a construção e consulta de registros",
    "paginas": 450,
    "editora": "Editora IGTI",    
    "avaliacoes": []
}'
WHERE
    livro_id = 4;

UPDATE
    livros
SET
    livroinfo = '{
    "descricao": "O livro faz uma introdução aos bancos de dados NoSQL, em especial os bancos de dados orientados a documentos",
    "paginas": 100,
    "editora": "Editora IGTI",
    "avaliacoes": []
}'
WHERE
    livro_id = 5;

UPDATE
    livros
SET
    livroinfo = '{
    "descricao": "O livro aborda na teoria a importância e utilização da autorização e autenticação em APIs com Node.js e Express",
    "paginas": 90,
    "editora": "Editora IGTI",
    "avaliacoes": []
}'
WHERE
    livro_id = 6;