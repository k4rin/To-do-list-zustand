import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { Save, X } from "lucide-react";
import { StoreContext } from "../store/StoreContext/StoreContext";

export function CreateTaskPage() {
  const { dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { title: name.trim(), description: description.trim() },
      });
      setName("");
      setDescription("");
      navigate("/list");
    }
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
    navigate("/list");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Criar Nova Tarefa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="task-name">Nome da Tarefa</Label>
            <Input
              id="task-name"
              placeholder="Digite o nome da tarefa..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="task-description">Descrição</Label>
            <Textarea
              id="task-description"
              placeholder="Digite a descrição da tarefa..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleCancel}>
              <X className="size-4 mr-2" />
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={!name.trim()}>
              <Save className="size-4 mr-2" />
              Salvar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

