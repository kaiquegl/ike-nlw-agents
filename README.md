# IKE - NLW Agents

Projeto full-stack desenvolvido com Node.js e React, usando PostgreSQL com extensão pgvector para funcionalidades de IA.

## 🛠️ Tecnologias

### Server (Backend)
- **Node.js** - Runtime JavaScript com suporte a TypeScript nativo
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL + pgvector** - Banco de dados com extensão para vetores
- **Zod** - Validação de esquemas TypeScript-first
- **TypeScript** - Tipagem estática
- **Docker** - Containerização do banco de dados

### Web (Frontend)
- **React 19** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **TanStack Query** - Gerenciamento de estado servidor
- **TanStack Router** - Roteamento type-safe
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **TypeScript** - Tipagem estática

## 🚀 Setup e Configuração

### Pré-requisitos
- Node.js 18+
- pnpm
- Docker e Docker Compose

### 1. Instalação das Dependências

```bash
# Instalar dependências na raiz
pnpm install

# Instalar dependências do servidor
cd server
pnpm install

# Instalar dependências do web
cd ../web
pnpm install
```

### 2. Configuração do Banco de Dados

```bash
# Navegar para o diretório do servidor
cd server

# Iniciar o PostgreSQL com Docker
docker-compose up -d

# Executar migrações
pnpm drizzle-kit migrate

# Popular banco com dados iniciais (opcional)
pnpm run db:seed
```

### 3. Configuração das Variáveis de Ambiente

Criar arquivo `.env` no diretório `server/`:

```env
PORT=3333
DATABASE_URL=postgresql://docker_user:docker_password@localhost:5432/nlw-agents
```

### 4. Executar o Projeto

**Terminal 1 - Servidor:**
```bash
cd server
pnpm run dev
```

**Terminal 2 - Web:**
```bash
cd web
pnpm run dev
```

## 📦 Scripts Disponíveis

### Server
- `pnpm run dev` - Inicia servidor em modo desenvolvimento
- `pnpm run start` - Inicia servidor em produção
- `pnpm run db:seed` - Popula banco com dados iniciais

### Web
- `pnpm run dev` - Inicia aplicação em modo desenvolvimento
- `pnpm run build` - Build de produção
- `pnpm run preview` - Preview do build de produção

## 🏗️ Padrões de Projeto

- **Monorepo** - Servidor e web em repositório único
- **Type-safe** - TypeScript em todo o projeto
- **API-first** - Backend como API REST
- **Component-driven** - Componentes reutilizáveis no frontend
- **Schema validation** - Validação com Zod
- **Code style** - Biome para formatação e linting

## 🗄️ Estrutura de Banco

O projeto utiliza PostgreSQL com a extensão pgvector para funcionalidades de IA e busca semântica.

## 📱 Acesso

- **Web:** http://localhost:5173
- **API:** http://localhost:3333
